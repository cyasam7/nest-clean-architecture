import { SetMetadata } from '@nestjs/common';
import { ERoles } from 'src/auth/infrastucture/model/user.model';
import { Action } from './create.decorator';

export const ReadPermission = (...roles: ERoles[]): void =>
  void SetMetadata(
    Action.READ,
    roles.map((i) => `${i}:${Action.READ}`),
  );
