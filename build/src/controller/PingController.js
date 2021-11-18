"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingController = void 0;
class PingController {
    getPong(req, res) {
        res.status(200).send({ success: true });
    }
}
exports.PingController = PingController;
//# sourceMappingURL=PingController.js.map