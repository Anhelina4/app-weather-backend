"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../controllers/User/helpers");
const register = async (req, res) => {
    try {
        const { email, name, surname, password, avatar } = req.body;
        if (!email || !name || !surname || !password) {
            res.sendStatus(400);
        }
        const isUserExists = await (0, User_1.getUserByEmail)(email);
        if (isUserExists) {
            res.sendStatus(400);
        }
        const salt = (0, helpers_1.random)();
        const hashedPassword = (0, helpers_1.hashPassword)(salt, password);
        const user = await (0, User_1.createUser)({
            email,
            name,
            surname,
            avatar,
            authentication: { salt, password: hashedPassword },
        });
        return res.status(200).json(user).end();
    }
    catch (error) {
        console.error('Error during register', error);
        res.sendStatus(400);
    }
};
exports.register = register;
exports.default = exports.register;
//# sourceMappingURL=register.js.map