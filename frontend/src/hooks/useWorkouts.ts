import { useEffect, useState } from "react"
import { IWorkout } from "../types/workout";

export const useWorkouts = () => {
  const ENDPOINT = 'http://localhost:4000/api/workout/'

  const [workouts, setWorkouts] = useState<IWorkout[]>([]);
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);

  const addWorkout = (workout: IWorkout) => {
    // setWorkouts((prev) => [...prev, workout])
  }
  const removeWorkout = (id: string) => {

  }
  const updateWorkout = (workout: IWorkout) => {

  }
  const loadWorkouts = async () => {
    try {
      setLoading(true)
      const response = await fetch(ENDPOINT)
      if (response.ok) {
        const json = await response.json() as IWorkout[]
        setWorkouts(json)
      }
    } catch (error) {
      setError('Something went wrong while fetching workouts')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadWorkouts()
  }, [])

  return { workouts, error, loading, addWorkout, removeWorkout, updateWorkout }
}