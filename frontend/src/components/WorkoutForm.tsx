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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const success = await addItem({ title, reps: Number(reps), load: Number(load) })
    if (success) {
      clearInputs()
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <button>Add Workout</button>
    </form>
  )
}

export default WorkoutForm