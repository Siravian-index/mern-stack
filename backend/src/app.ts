import 'dotenv/config'
import express, { Response, Request } from 'express'

import workoutRouter from './routes/workout.routes'

const app = express()

app.use(express.json())

// custom routes
app.use(workoutRouter)

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
})