import { useWorkoutContext } from "../context/WorkoutContext"
import { IWorkout } from "../types/workout"

import { formatDistanceToNow } from 'date-fns'

interface Props {
  workout: IWorkout
}

const WorkoutDetails = ({ workout }: Props) => {
  const { removeItem } = useWorkoutContext()
  const { load, reps, title, createdAt, id } = workout

  const formattedDate = () => createdAt && formatDistanceToNow(new Date(createdAt), { addSuffix: true })

  return (
    <div className="workout-details">
      <h4>{title}</h4>
      <p><strong>Load (kg): </strong>{load}</p>
      <p><strong>Number of reps: </strong>{reps}</p>
      <p>{formattedDate()}</p>
      {id && <span className="material-symbols-outlined" onClick={() => removeItem(id)}>delete</span>}
    </div>
  )
}

export default WorkoutDetails