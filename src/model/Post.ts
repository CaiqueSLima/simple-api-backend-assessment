export class Post {
    constructor(
        private id: number,
        private author: string,
        private authorId: number,
        private likes: number,
        private popularity: number,
        private reads: number,
        private tags: string[]
    ) { }

    public getId = () => this.id
    public getAuthor = () => this.author
    public getAuthorId = () => this.authorId
    public getLikes = () => this.likes
    public getPopularity = () => this.popularity
    public getReads = () => this.reads
    public getTags = () => this.tags

    public setId(id: number) {
        this.id = id
    }

    public setAuthor(author: string) {
        this.author = author
    }

    public setAuthorId(authorId: number) {
        this.authorId = authorId
    }

    public setLikes(likes: number) {
        this.likes = likes
    }

    public setPopularity(popularity: number) {
        this.popularity = popularity
    }

    public setReads(reads: number) {
        this.reads = reads
    }

    public setTags(tags: string[]) {
        this.tags = tags
    }

    public static toPostModel(post: any): Post {
        return new Post(
            post.id,
            post.author,
            post.authorId,
            post.likes,
            post.popularity,
            post.reads,
            post.tags
        )
    }
}

export interface PostData {
    id: number
    author: string
    authorId: number
    likes: number
    popularity: number
    reads: number
    tags: string[]
}