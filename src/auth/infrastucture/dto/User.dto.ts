import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({ default: 'value' })
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty()
  readonly lastName: string;
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty()
  readonly password: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  readonly phone?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  readonly profilePhoto?: string;

  @IsString()
  @IsArray()
  @IsOptional()
  @ApiProperty({ required: false })
  readonly photos?: string[];
}

export class QueryUserDTO {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  readonly name?: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  readonly lastName?: string;
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  readonly email?: string;
}

export class UpdateUserDTO extends PartialType(CreateUserDTO) {}
