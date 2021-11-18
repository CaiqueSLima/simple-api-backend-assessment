"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
class Post {
    constructor(id, author, authorId, likes, popularity, reads, tags) {
        this.id = id;
        this.author = author;
        this.authorId = authorId;
        this.likes = likes;
        this.popularity = popularity;
        this.reads = reads;
        this.tags = tags;
        this.getId = () => this.id;
        this.getAuthor = () => this.author;
        this.getAuthorId = () => this.authorId;
        this.getLikes = () => this.likes;
        this.getPopularity = () => this.popularity;
        this.getReads = () => this.reads;
        this.getTags = () => this.tags;
    }
    setId(id) {
        this.id = id;
    }
    setAuthor(author) {
        this.author = author;
    }
    setAuthorId(authorId) {
        this.authorId = authorId;
    }
    setLikes(likes) {
        this.likes = likes;
    }
    setPopularity(popularity) {
        this.popularity = popularity;
    }
    setReads(reads) {
        this.reads = reads;
    }
    setTags(tags) {
        this.tags = tags;
    }
    static toPostModel(post) {
        return new Post(post.id, post.author, post.authorId, post.likes, post.popularity, post.reads, post.tags);
    }
}
exports.Post = Post;
//# sourceMappingURL=Post.js.map