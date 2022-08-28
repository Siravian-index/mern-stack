import { useState } from "react";
import { useWorkoutContext } from "../context/WorkoutContext";
import Input from "./Input";


const WorkoutForm = () => {
  const { addItem } = useWorkoutContext()
  const [title, setTitle] = useState('')
  const [reps, setReps] = useState('');
  const [load, setLoad] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addItem({ title, reps: Number(reps), load: Number(load) })
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <Input
        label="Title"
        setState={setTitle}
        value={title}
      />
      <Input
        type="number"
        label="Load"
        setState={setLoad}
        value={load}
      />
      <Input
        type="number"
        label="Reps"
        setState={setReps}
        value={reps}
      />

      <button>Add Workout</button>
    </form>
  )
}

export default WorkoutForm