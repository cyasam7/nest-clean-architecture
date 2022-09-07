import { PaginateResult } from 'mongoose';
import { UserDocument } from './infrastucture/model/user.model';

export type PaginatedUsersEntity = PaginateResult<UserDocument>;
