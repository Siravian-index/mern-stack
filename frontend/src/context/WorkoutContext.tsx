import React, { createContext, useContext } from "react"
import { useWorkouts } from "../hooks/useWorkouts"
import { IWorkout } from "../types/workout"


interface contextValue {
  addWorkout: (workout: IWorkout) => void
  removeWorkout: (id: string) => void
  updateWorkout: (workout: IWorkout) => void
  workouts: IWorkout[]
  error: string
  loading: boolean
}

interface Props {
  children: React.ReactNode
}
const Context = createContext({} as contextValue)
const { Provider } = Context

const WorkoutContext = ({ children }: Props) => {
  const workoutData = useWorkouts()
  return (
    <Provider value={workoutData}>
      {children}
    </Provider>
  )
}

export const useWorkoutContext = () => useContext(Context)

export default WorkoutContext