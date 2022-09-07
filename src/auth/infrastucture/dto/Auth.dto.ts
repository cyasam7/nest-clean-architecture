import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDefined,
  IsEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class LoginDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({ default: 'value' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({ default: 'value' })
  readonly password: string;
}

export class RegisterUserDTO {
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

  @IsOptional()
  @IsString()
  @IsEmpty()
  @ApiProperty()
  readonly phone?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly profilePhoto?: string;

  @IsOptional()
  @IsString()
  @IsArray()
  @ApiProperty()
  readonly photos?: string[];
}
