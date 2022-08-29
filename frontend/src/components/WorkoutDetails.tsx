import { useWorkoutContext } from "../context/WorkoutContext"
import { IWorkout } from "../types/workout"

interface Props {
  workout: IWorkout
}

const WorkoutDetails = ({ workout }: Props) => {
  const { removeItem } = useWorkoutContext()
  const { load, reps, title, createdAt, id } = workout

  return (
    <div className="workout-details">
      <h4>{title}</h4>
      <p><strong>Load (kg): </strong>{load}</p>
      <p><strong>Number of reps: </strong>{reps}</p>
      <p>{createdAt}</p>
      {id && <span onClick={() => removeItem(id)}>X</span>}
    </div>
  )
}

export default WorkoutDetails