"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const handlers_1 = require("controllers/User/handlers");
const UserRoutes = (router) => {
    router.post('/auth/register', handlers_1.register);
};
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=UserRoutes.js.map