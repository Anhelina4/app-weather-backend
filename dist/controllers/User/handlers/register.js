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
const User_1 = require("models/User");
const helpers_1 = require("controllers/User/helpers");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name, surname, password, avatar } = req.body;
        if (!email || !name || !surname || !password) {
            res.sendStatus(400);
        }
        const isUserExists = yield (0, User_1.getUserByEmail)(email);
        if (isUserExists) {
            res.sendStatus(400);
        }
        const salt = (0, helpers_1.random)();
        const hashedPassword = (0, helpers_1.hashPassword)(salt, password);
        const user = yield (0, User_1.createUser)({
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
});
exports.default = register;
//# sourceMappingURL=register.js.map