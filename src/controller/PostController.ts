import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { PostDatabase } from "../data/PostDatabase"

const postBusiness = new PostBusiness(new PostDatabase())
export class PostController {

    public async getPosts(req: Request, res: Response): Promise<void> {

        try {
            
            const tags = (req.query.tags as string)?.toLowerCase() || undefined
            const sortBy = (req.query.sortBy as string)?.toLowerCase() || 'id'
            const direction = (req.query.direction as string)?.toLowerCase() || 'asc'

            const posts = await postBusiness.getPostLogic(tags, sortBy, direction)

            res.status(200).send({ posts })

        } catch (error: any) {
            res.status(error.statusCode).send({ error: error.message })
        }
    }
}