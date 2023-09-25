"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlers_1 = require("controllers/User/handlers");
exports.default = (router) => {
    router.post('/auth/register', handlers_1.register);
};
//# sourceMappingURL=UserRoutes.js.map