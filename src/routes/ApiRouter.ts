import { Router } from "express"
import { PingController } from "../controller/PingController"

const pingController = new PingController()

export const apiRouter = Router()

apiRouter.get('/ping', pingController.getPong)