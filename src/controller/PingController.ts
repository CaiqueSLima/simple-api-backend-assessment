import { Request, Response } from "express"

export class PingController {
    
    public getPong(req: Request, res: Response): void {

        res.status(200).send({ success: true })

    }

}