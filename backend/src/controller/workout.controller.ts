import { Request, Response } from "express"
import { WorkoutModel } from "../model/workout.model"
import { IWorkout } from "../types"

export const getAll = (req: Request, res: Response) => {
  return res.json({ msg: "getAll" })
}

export const getById = (req: Request, res: Response) => {
  return res.json({ msg: "getById" })

}

export const createOne = async (req: Request<{}, {}, IWorkout>, res: Response) => {
  const { title, reps, load } = req.body
  try {
    const workout = await WorkoutModel.create({ title, reps, load })
    return res.status(201).json(workout)
  } catch ({ message }) {
    return res.status(400).json({ error: message })
  }
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
