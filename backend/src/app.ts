import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import connectToDB from './db/config'

import workoutRouter from './routes/workout.routes'

const main = async () => {
  const app = express()

  app.use(cors())
  app.use(express.json())

  // custom routes
  app.use('/api/workouts', workoutRouter)

  await connectToDB(app)
}

main()

