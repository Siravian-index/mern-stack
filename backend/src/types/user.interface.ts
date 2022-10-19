import { Model } from 'mongoose';
export interface IUserAccount {
  email: string
  password: string
}
export interface IUserModel extends Model<IUserAccount> {
  signup(email: string, password: string): number;
}
