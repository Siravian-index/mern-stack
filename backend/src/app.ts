import 'dotenv/config'
import express, { Express, Response, Request } from 'express'


const app = express()

app.use(express.json())


app.get('/', (req: Request, res: Response) => {
  return res.json({ full: 'stack' })
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
})