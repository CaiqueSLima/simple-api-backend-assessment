import { Request, Response } from "express"

export class PostController {

    public async getPosts(req: Request, res: Response): Promise<void> {

        try {
            
            const tags = (req.query.tags as string).toLowerCase()
            const sortBy = (req.query.sortBy as string).toLowerCase() || 'id'
            const direction = (req.query.direction as string).toLowerCase() || 'asc'

            console.log(`tags: ${tags}`)
            console.log(`sortBy: ${sortBy}`)
            console.log(`direction: ${direction}`)

        } catch (error: any) {
            res.status(error.statusCode).send({ error: error.message })
        }

    }
}