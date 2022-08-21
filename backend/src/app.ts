import 'dotenv/config'
import express, { Response, Request } from 'express'
import connectToDB from './db/config'

import workoutRouter from './routes/workout.routes'

const main = async () => {
  const app = express()

  app.use(express.json())

  // custom routes
  app.use('/api/workout', workoutRouter)

  await connectToDB(app)
}

main()

