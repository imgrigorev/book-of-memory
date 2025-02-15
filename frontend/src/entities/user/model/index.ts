export interface IUserData {
  avatar?: string;
  fullName?: string;
  profession?: string;
}

export interface IUserApi {
  id: string;
  data: () => IUserData;
}
export type TUsersApiList = IUserApi[];

export interface IUser extends IUserData {
  id: string;
}

export type TUsersList = IUser[];
