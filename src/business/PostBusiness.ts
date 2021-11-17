import { CustomError } from "../error/CustomError";
import { Post } from "../model/Post";

export class PostBusiness {

    public async getPostLogic(tags: string | undefined, sortBy: string, direction: string): Promise<void> {

        if (!tags) {
            throw new CustomError('Tags parameter is required')
        }

        if (sortBy !== 'id' && sortBy !== 'reads' && sortBy !== 'likes' && sortBy !== 'popularity') {
            throw new CustomError('sortBy parameter is invalid')
        }

        if (direction !== 'asc' && direction !== 'desc') {
            throw new CustomError('direction parameter is invalid')
        }

        const tagsArray = tags.split(',')
        console.log(tagsArray)

    }

}