import { useWorkoutContext } from "../context/WorkoutContext"

const Home = () => {
  const { error, loading, resource: workoutsList } = useWorkoutContext()


  console.log(workoutsList);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h3>Home</h3>
      {error && <p>{error}</p>}
    </>
  )
}

export default Home