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
exports.PostController = void 0;
const PostBusiness_1 = require("../business/PostBusiness");
const PostDatabase_1 = require("../data/PostDatabase");
const postBusiness = new PostBusiness_1.PostBusiness(new PostDatabase_1.PostDatabase());
class PostController {
    getPosts(req, res) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tags = ((_a = req.query.tags) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || undefined;
                const sortBy = ((_b = req.query.sortBy) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || 'id';
                const direction = ((_c = req.query.direction) === null || _c === void 0 ? void 0 : _c.toLowerCase()) || 'asc';
                const posts = yield postBusiness.getPostLogic(tags, sortBy, direction);
                res.status(200).send({ posts });
            }
            catch (error) {
                res.status(error.statusCode).send({ error: error.message });
            }
        });
    }
}
exports.PostController = PostController;
//# sourceMappingURL=PostController.js.map