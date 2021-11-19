import axios from "axios";
import { CustomError } from "../error/CustomError";
import { PostData } from "../model/Post";

export class FetchData {
    public static async getPosts(tags: string[]): Promise<PostData[]> {

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

            return allPosts
            
        } catch (error) {
            console.log(error)
            throw new CustomError('Problem when getting posts from source API')
        }
        
    }
}