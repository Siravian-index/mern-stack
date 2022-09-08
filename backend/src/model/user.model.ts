import { model, Schema } from "mongoose";
import { IUserAccount } from "../types";

const userAccountSchema = new Schema<IUserAccount>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, {
  toJSON: {
    transform: function (doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v
    }
  }
})

const UserAccountModel = model('UserAccount', userAccountSchema)

export {
  UserAccountModel
}