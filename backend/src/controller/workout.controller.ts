import { Request, Response } from "express"

export const getAll = (req: Request, res: Response) => {
  return res.json({ msg: "getAll" })
}

export const getById = (req: Request, res: Response) => {
  return res.json({ msg: "getById" })

}

export const createOne = (req: Request, res: Response) => {
  return res.json({ msg: "createOne" })

}

export const deleteAll = (req: Request, res: Response) => {
  return res.json({ msg: "deleteAll" })

}

export const deleteById = (req: Request, res: Response) => {
  return res.json({ msg: "deleteById" })

}

export const editOne = (req: Request, res: Response) => {
  return res.json({ msg: "editOne" })

}
