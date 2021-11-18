import { PostDatabase } from "../data/PostDatabase"
import { CustomError } from "../error/CustomError"
import { Post } from "../model/Post"


export class PostBusiness {

    constructor(
        private postDatabase: PostDatabase
    ) { }

    public async getPostLogic(tags: string | undefined, sortBy: string, direction: string): Promise<Post[]> {

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
        const postsFromSource = await this.postDatabase.getPostsFromSource(tagsArray, sortBy, direction)

        return postsFromSource
    }
}