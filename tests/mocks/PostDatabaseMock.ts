import { Post } from "../../src/model/Post"
import { techPostsToModel } from "./PostsMock"

export class PostDatabaseMock {

    public async getPostsFromSource(tags: string[], sortBy: string, direction: string): Promise<Post[]> {

        return techPostsToModel
    }
}