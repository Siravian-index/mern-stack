import { IWorkoutResponse } from "../types/fetchResponse"
import { IWorkout } from "../types/workout"

const ENDPOINT = 'http://localhost:4000/api/workout/'



export const getWorkouts = async (): Promise<IWorkoutResponse> => {
  const response = await fetch(ENDPOINT)
  if (response.ok) {
    const data = await response.json() as IWorkout[]
    const payload = {
      error: null,
      data
    }
    return payload
  }
  return {
    error: `Server failed to respond. Status: ${response.status}`,
    data: [],
  }
}