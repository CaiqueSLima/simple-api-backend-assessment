"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const PingController_1 = require("../controller/PingController");
const PostController_1 = require("../controller/PostController");
const pingController = new PingController_1.PingController();
const postController = new PostController_1.PostController();
exports.apiRouter = (0, express_1.Router)();
exports.apiRouter.get('/ping', pingController.getPong);
exports.apiRouter.get('/posts', postController.getPosts);
//# sourceMappingURL=ApiRouter.js.map