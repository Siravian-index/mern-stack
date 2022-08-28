import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import { useWorkoutContext } from "../context/WorkoutContext"

const Home = () => {
  const { error, loading, resource: workoutsList } = useWorkoutContext()
  const hasContent = Boolean(workoutsList.length)
  const content = workoutsList.map((w) => <WorkoutDetails workout={w} key={w.id} />)
  return (
    <div className="home">
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <div className="workouts">
        {hasContent && content}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home