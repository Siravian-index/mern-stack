import { Express } from "express"
import mongoose from "mongoose"

const connectToDB = async (app: Express) => {
  try {
    await mongoose.connect(process.env.DB_URI!)
    app.listen(process.env.PORT, () => {
      console.log(`Listening on ${process.env.PORT}`);
    })
  } catch (error) {
    console.error(`Failed DB connection: ${error}`)
  }
}

export default connectToDB