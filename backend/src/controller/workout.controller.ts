import { Request, Response } from "express"
import { WorkoutModel } from "../model/workout.model"
import { IWorkout } from "../types"

export const getAll = async (req: Request, res: Response) => {
  try {
    const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 })
    return res.status(200).json(workouts)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const workout = await WorkoutModel.findById(id)
    return res.status(200).json(workout)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export const createOne = async (req: Request<{}, {}, IWorkout>, res: Response) => {
  const { title, reps, load } = req.body
  try {
    const workout = await WorkoutModel.create({ title, reps, load })
    return res.status(201).json(workout)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export const deleteAll = (req: Request, res: Response) => {

}

export const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const workout = await WorkoutModel.findById(id)
    await WorkoutModel.findByIdAndDelete(id)
    return res.status(200).json(workout)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export const editOne = (req: Request, res: Response) => {
  return res.json({ msg: "editOne" })
}
