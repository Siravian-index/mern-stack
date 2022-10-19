import { Request, Response } from "express"
import { UserAccountModel } from "../model/user.model"



export const loginUser = async (req: Request, res: Response) => {
  res.json({ msg: 'WIP' })
}

export const signUpUser = async (req: Request<{}, {}, { email: string, password: string }>, res: Response) => {
  const { email, password } = req.body
  try {
    const user = await UserAccountModel.signup(email, password)
    res.status(200).json({ email, user })
  } catch (error) {
    // @ts-ignore
    res.status(400).json({ error: error.message })
  }
}