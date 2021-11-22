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

        console.log(uniquePosts.length)

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