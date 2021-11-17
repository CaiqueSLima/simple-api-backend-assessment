import axios from "axios"
import { CustomError } from "../error/CustomError"
import { Post, PostData } from "../model/Post"

export class PostDatabase {

    public async getPostsFromSource(tags: string[], sortBy: string, direction: string): Promise<Post[]> {

        try {

            const urlArray: string[] = tags.map(tag => {
                return `https://api.hatchways.io/assessment/blog/posts?tag=${tag}`
            })

            const allData = await Promise.all(urlArray.map(url => axios.get(url)))

            const rawResult = allData?.map((item: any) => item.data.posts)

            let allPosts: PostData[] = []

            for (const postArray of rawResult) {
                postArray.forEach((post: any) => {
                    allPosts.push(post)
                })
            }

            const uniquePosts = allPosts.filter((post, index, self) => {
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

        } catch (error) {
            console.log(error)
            throw new CustomError('Problem when getting posts from source API')
        }
    }
}