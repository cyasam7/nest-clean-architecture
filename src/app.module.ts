import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { config, IEnvConfig, joiSchemaEnv } from './config';
import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { AppServices } from './app.service';
import { User, UserSchema } from './auth/infrastucture/model/user.model';

export const isDev = process.env.NODE_ENV === 'dev' ? true : false;

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),

    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema: joiSchemaEnv,
    }),
    MongooseModule.forRootAsync({
      inject: [config.KEY],
      useFactory: async (config: IEnvConfig) => {
        mongoose.plugin(mongoosePaginate);
        return {
          uri: isDev
            ? `mongodb://${config.MONGO_HOST}:27017/${config.MONGO_DB_NAME}`
            : `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${config.MONGO_DB_NAME}`,
        };
      },
    }),
    AuthModule,
  ],
  providers: [AppServices],
})
export class AppModule {}
