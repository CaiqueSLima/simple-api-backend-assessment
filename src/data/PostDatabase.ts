import { Post, PostData } from "../model/Post"
import { FetchData } from "../services/FetchData"

export class PostDatabase {

    public async getPostsFromSource(tags: string[], sortBy: string, direction: string): Promise<Post[]> {

        const allPosts = await FetchData.getPosts(tags)

        const uniquePosts = allPosts?.filter((post, index, self) => {
            return index === self.findIndex((p) => (p.id === post.id))
        })

        let sortedPosts: PostData[] = []

        if (direction === 'asc') {
            sortedPosts = uniquePosts.sort((a: any, b: any) => (a[sortBy] > b[sortBy]) ? 1 : -1)
        } else {
            sortedPosts = uniquePosts.sort((a: any, b: any) => (a[sortBy] < b[sortBy]) ? 1 : -1)
        }

        const resultPosts = sortedPosts.map(post => Post.toPostModel(post))

        return resultPosts
    }
}