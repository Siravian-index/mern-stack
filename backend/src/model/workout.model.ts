import { model, Schema } from "mongoose";
import { IWorkout } from "../types";

const workoutSchema = new Schema<IWorkout>({
  title: { type: String, required: true },
  reps: { type: Number, required: true },
  load: { type: Number, required: true },
}, {
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v
    }
  }
})

const workoutModel = model('Workout', workoutSchema)

export {
  workoutModel
}