import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from 'src/auth/infrastucture/model/role.model';
import { ERoles } from 'src/auth/infrastucture/model/user.model';

@Injectable()
export class AppServices implements OnApplicationBootstrap {
  constructor(@InjectModel(Role.name) private roleModel: Model<Role>) {}

  async onApplicationBootstrap(): Promise<void> {
    for (const key in ERoles) {
    }
  }
}
