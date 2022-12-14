import React, { createContext, useContext } from "react"
import { useResource } from "../hooks/useResource"
import { IWorkout } from "../types/workout"


type contextType = ReturnType<typeof useResource<IWorkout>>
interface Props {
  children: React.ReactNode
}
const Context = createContext({} as contextType)
const { Provider } = Context

const WorkoutContext = ({ children }: Props) => {
  const ENDPOINT = 'http://localhost:4000/api/workouts/'
  const workoutData = useResource<IWorkout>(ENDPOINT, 'workout')
  return (
    <Provider value={workoutData}>
      {children}
    </Provider>
  )
}

export const useWorkoutContext = () => useContext(Context)

export default WorkoutContext