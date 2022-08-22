import { IWorkout } from "../types/workout"

const ENDPOINT = 'http://localhost:4000/api/workout/'

export const getWorkouts = async () => await (await fetch(ENDPOINT)).json() as IWorkout[]
