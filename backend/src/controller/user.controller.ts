import { Request, Response } from "express"
import { UserAccountModel } from "../model/user.model"
import { createToken } from "../utils/jsonUtils"


export const loginUser = async (req: Request, res: Response) => {
  res.json({ msg: 'WIP' })
}

export const signUpUser = async (req: Request<{}, {}, { email: string, password: string }>, res: Response) => {
  const { email, password } = req.body
  try {
    const user = await UserAccountModel.signup(email, password)
    console.log(user);
    const token = createToken(user._id)

    res.status(200).json({ email, token })
  } catch (error) {
    // @ts-ignore
    res.status(400).json({ error: error.message })
  }
}