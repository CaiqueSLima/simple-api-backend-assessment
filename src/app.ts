import express, { Express } from "express"
import cors from "cors"
import { apiRouter } from "./routes/ApiRouter"

const app: Express = express()

app.use(express.json())
app.use(cors())
app.use('/api', apiRouter)

export default app