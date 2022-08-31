import { useWorkoutContext } from "../context/WorkoutContext"
import WorkoutDetails from "./WorkoutDetails"


const WorkoutList = () => {
  const { error, loading, resource: workoutsList } = useWorkoutContext()
  const hasContent = Boolean(workoutsList.length)
  const content = workoutsList.map((w) => <WorkoutDetails workout={w} key={w.id} />)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p className="error">{error}</p>
  }

  return (
    <div className="workouts">
      {hasContent && content}
    </div>
  )
}

export default WorkoutList