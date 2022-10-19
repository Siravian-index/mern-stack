import { model, Schema } from "mongoose";
import bcrypt from 'bcrypt'

const userAccountSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, {
  toJSON: {
    transform: function (_, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v
    }
  },
  statics: {
    async signup(email: string, password: string) {
      const exist = await this.findOne({ email })
      if (exist) {
        throw new Error("Email already in use");
      }

      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password, salt)
      return await this.create({ email, password: hash })
    }
  }
})

export const UserAccountModel = model('UserAccount', userAccountSchema)

