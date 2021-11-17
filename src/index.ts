import app  from "./app"
import { apiRouter } from "./routes/ApiRouter"

app.use('/api', apiRouter)