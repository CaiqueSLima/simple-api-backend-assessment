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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostBusiness = void 0;
const CustomError_1 = require("../error/CustomError");
class PostBusiness {
    constructor(postDatabase) {
        this.postDatabase = postDatabase;
    }
    getPostLogic(tags, sortBy, direction) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!tags) {
                throw new CustomError_1.CustomError('Tags parameter is required');
            }
            if (sortBy !== 'id' && sortBy !== 'reads' && sortBy !== 'likes' && sortBy !== 'popularity') {
                throw new CustomError_1.CustomError('sortBy parameter is invalid');
            }
            if (direction !== 'asc' && direction !== 'desc') {
                throw new CustomError_1.CustomError('direction parameter is invalid');
            }
            const tagsArray = tags.split(',');
            const postsFromSource = yield this.postDatabase.getPostsFromSource(tagsArray, sortBy, direction);
            return postsFromSource;
        });
    }
}
exports.PostBusiness = PostBusiness;
//# sourceMappingURL=PostBusiness.js.map