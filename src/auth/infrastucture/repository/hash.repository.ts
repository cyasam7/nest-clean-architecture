import { Injectable } from '@nestjs/common';
import { IHashRepository } from 'src/auth/domain/repository/hash.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashRepository implements IHashRepository {
  hash(value: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(value, salt);
  }
  compare(value: string, hash: string): boolean {
    return bcrypt.compareSync(value, hash);
  }
}
