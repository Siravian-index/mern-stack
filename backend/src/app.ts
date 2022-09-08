import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import connectToDB from './db/config'

import workoutRouter from './routes/workout.routes'
import userRouter from './routes/user.routes'

const main = async () => {
  const app = express()

  app.use(cors())
  app.use(express.json())

  // custom routes
  app.use('/api/workouts', workoutRouter)
  app.use('/api/user', userRouter)

  await connectToDB(app)
}

main()

