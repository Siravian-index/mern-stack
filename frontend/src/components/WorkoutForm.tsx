import { useWorkoutContext } from "../context/WorkoutContext";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
  title: string,
  reps: number,
  load: number,
};

const WorkoutForm = () => {
  const { addItem, errorPost, } = useWorkoutContext()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const success = await addItem(data)
    if (success) {
      reset()
    }
  }

  const showButton = !Object.keys(errors).length
  return (
    <form className="create" onSubmit={handleSubmit(onSubmit)}>
      <h3>Add a New Workout</h3>
      <label>
        Title
        <input {...register("title", { required: { value: true, message: 'This field is required' } })} placeholder='Exercise name' />
      </label>
      {errors.title && <p className="error">{errors.title?.message}</p>}
      <label>
        Load
        <input type='number' {...register("load", { required: { value: true, message: 'This field is required' }, valueAsNumber: true, min: { value: 1, message: 'Should be a positive number' }, max: { value: 300, message: 'Should be less than 300' } })} placeholder='Weight' />
      </label>
      {errors.load && <p className="error">{errors.load?.message}</p>}
      <label>
        Reps
        <input type='number' {...register("reps", { required: { value: true, message: 'This field is required' }, valueAsNumber: true, min: { value: 1, message: 'Should be a positive number' }, max: { value: 100, message: 'Max reps 100' } })} placeholder='Repetitions' />
      </label>
      {errors.reps && <p className="error">{errors.reps?.message}</p>}
      {showButton && <button>Add Workout</button>}
      {errorPost && <p className="error">{errorPost}</p>}
    </form >
  )
}

export default WorkoutForm