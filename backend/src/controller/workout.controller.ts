import { Request, Response } from "express"
import CustomError from "../error/CustomError"
import { WorkoutModel } from "../model/workout.model"
import { IWorkout } from "../types"
import { isValidId } from "../utils/validateId"

export const getAll = async (req: Request, res: Response) => {
  try {
    const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts)
  } catch (error) {
    res.status(400).json({ error })
  }
}

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    if (!isValidId(id)) {
      throw new CustomError('Invalid id', 400)
    }
    const workout = await WorkoutModel.findById(id)
    if (!workout) {
      throw new CustomError('Workout not found', 404)
    }
    res.status(200).json(workout)
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(error.code).json({ error: error.sendMessage() })
      return
    }
    res.status(500).json({ error: 'Server error' })
  }
}

export const createOne = async (req: Request<{}, {}, IWorkout>, res: Response) => {
  const { title, reps, load } = req.body
  try {
    if (!(title && reps && load)) {
      throw new CustomError('Missing required properties', 400)
    }
    const workout = await WorkoutModel.create({ title, reps, load })
    res.status(201).json(workout)
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(error.code).json({ error: error.sendMessage() })
      return
    }
    res.status(500).json({ error: 'Server error' })
  }
}

export const deleteAll = (req: Request, res: Response) => {
  // pending
}

export const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    if (!isValidId(id)) {
      throw new CustomError('Invalid id', 400)
    }
    const workout = await WorkoutModel.findById(id)
    if (!workout) {
      throw new CustomError('Workout not found', 404)
    }
    await WorkoutModel.findByIdAndDelete(id)
    res.status(200).json(workout)
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(error.code).json({ error: error.sendMessage() })
      return
    }
    res.status(500).json({ error: 'Server error' })
  }
}

export const editOne = async (req: Request, res: Response) => {
  const { id } = req.params
  const paramsToUpdate = req.body

  try {
    if (!isValidId(id)) {
      throw new CustomError('Invalid id', 400)
    }
    const workout = await WorkoutModel.findByIdAndUpdate(id, { ...paramsToUpdate }, { new: true })
    if (!workout) {
      throw new CustomError('Workout not found', 404)
    }
    res.status(200).json(workout)
  } catch (error) {
    if (error instanceof CustomError) {
      res.status(error.code).json({ error: error.sendMessage() })
      return
    }
    res.status(500).json({ error: 'Server error' })
  }
}
