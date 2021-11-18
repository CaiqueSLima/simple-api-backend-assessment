"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDatabase = void 0;
const axios_1 = __importDefault(require("axios"));
const CustomError_1 = require("../error/CustomError");
const Post_1 = require("../model/Post");
class PostDatabase {
    getPostsFromSource(tags, sortBy, direction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const urlArray = tags.map(tag => {
                    return `https://api.hatchways.io/assessment/blog/posts?tag=${tag}`;
                });
                const allData = yield Promise.all(urlArray.map(url => axios_1.default.get(url)));
                const rawResult = allData === null || allData === void 0 ? void 0 : allData.map((item) => item.data.posts);
                let allPosts = [];
                for (const postArray of rawResult) {
                    postArray.forEach((post) => {
                        allPosts.push(post);
                    });
                }
                const uniquePosts = allPosts.filter((post, index, self) => {
                    return index === self.findIndex((p) => (p.id === post.id));
                });
                let sortedPosts = [];
                if (direction === 'asc') {
                    sortedPosts = uniquePosts.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
                }
                else {
                    sortedPosts = uniquePosts.sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1);
                }
                const resultPosts = sortedPosts.map(post => Post_1.Post.toPostModel(post));
                return resultPosts;
            }
            catch (error) {
                console.log(error);
                throw new CustomError_1.CustomError('Problem when getting posts from source API');
            }
        });
    }
}
exports.PostDatabase = PostDatabase;
//# sourceMappingURL=PostDatabase.js.map