"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const appRouter = () => {
    (0, UserRoutes_1.default)(router);
    return router;
};
exports.appRouter = appRouter;
//# sourceMappingURL=index.js.map