import { ERoles, UserDocument } from '../../infrastucture/model/user.model';

export interface IUserEntity {
  id: string;
  name: string;
  lastName: string;
  email: string;
  role: ERoles;
  phone?: string;
  profilePhoto?: string;
  photos?: string[];
}

export class UserEntity implements IUserEntity {
  id: string;
  name: string;
  lastName: string;
  email: string;
  role: ERoles;
  phone?: string;
  profilePhoto?: string;
  photos?: string[];

  constructor(data: UserDocument) {
    this.id = data._id;
    this.name = data.name;
    this.lastName = data.lastName;
    this.email = data.email;
    this.role = data.role;
    this.phone = data.phone;
    this.profilePhoto = data.profilePhoto;
    this.photos = data.photos;
  }
}
