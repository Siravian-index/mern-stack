import WorkoutDetails from "../components/WorkoutDetails"
import { useWorkoutContext } from "../context/WorkoutContext"

const Home = () => {
  const { error, loading, resource: workoutsList } = useWorkoutContext()
  if (loading) {
    return <div>Loading...</div>
  }
  const hasContent = Boolean(workoutsList.length)
  const content = workoutsList.map((w) => <WorkoutDetails workout={w} key={w.id} />)
  return (
    <div className="home">
      {error && <p>{error}</p>}
      <div className="workouts">
        {hasContent && content}
      </div>
    </div>
  )
}

export default Home