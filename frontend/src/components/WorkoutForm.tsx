import { useState } from "react";
import { useWorkoutContext } from "../context/WorkoutContext";
import Input from "./Input";


const WorkoutForm = () => {
  const { addItem, errorPost, } = useWorkoutContext()
  const [title, setTitle] = useState('')
  const [reps, setReps] = useState('');
  const [load, setLoad] = useState('');

  const clearInputs = () => {
    setTitle('')
    setReps('')
    setLoad('')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addItem({ title, reps: Number(reps), load: Number(load) })
    clearInputs()
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
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
      {errorPost && <p className="error">{errorPost}</p>}
    </form>
  )
}

export default WorkoutForm