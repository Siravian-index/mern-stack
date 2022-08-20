import express, { Express, Response, Request } from 'express'

const app: Express = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  return res.json({ test: 'hi' })
})


app.listen(3000, () => {
  console.log("listening on port 3000");
})