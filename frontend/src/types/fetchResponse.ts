import { IWorkout } from "./workout"

export interface IWorkoutResponse {
  error?: string | null
  data: IWorkout | IWorkout[]
}