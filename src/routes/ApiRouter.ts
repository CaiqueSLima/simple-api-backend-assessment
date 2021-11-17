import { Router } from "express"
import { PingController } from "../controller/PingController"
import { PostController } from "../controller/PostController"

const pingController = new PingController()
const postController = new PostController()

export const apiRouter = Router()

apiRouter.get('/ping', pingController.getPong)
apiRouter.get('/posts', postController.getPosts)