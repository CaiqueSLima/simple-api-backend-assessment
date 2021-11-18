import { Post, PostData } from "../../src/model/Post"
import { techPosts } from "./PostsMock"

export class PostDatabaseMock {

    public async getPostsFromSource(tags: string[], sortBy: string, direction: string): Promise<Post[]> {

        const mockPosts = techPosts.posts.map((post: PostData) => Post.toPostModel(post))

        return mockPosts
    }
}