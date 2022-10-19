import jwt from 'jsonwebtoken'
import { Types } from 'mongoose'

export const createToken = (id: Types.ObjectId) => {
  return jwt.sign({ id }, `${process.env.SECRET}`, { expiresIn: '3d' })
}