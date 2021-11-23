import { HashTable } from "../model/HashTable"
import { Post, PostData } from "../model/Post"
import { FetchData } from "../services/FetchData"

export class PostDatabase {

    public async getPostsFromSource(tags: string[], sortBy: string, direction: string): Promise<Post[]> {

        const allPosts = await FetchData.getPosts(tags)

        const hash: HashTable = {}

        const uniquePosts = allPosts?.filter((post: PostData) => {
            const key = post.id

            if (key in hash) {
                return false
            }

            hash[key] = true

            return true
        })

        const directionMultiplier: number = direction === 'asc' ? 1 : -1

        const sortedPosts: PostData[] = uniquePosts.sort((a: any, b: any) => {
            return directionMultiplier * (a[sortBy] - b[sortBy])
        })

        const resultPosts = sortedPosts.map(post => Post.toPostModel(post))

        return resultPosts
    }
}