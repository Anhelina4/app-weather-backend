"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const random = () => crypto_1.default.randomBytes(128).toString('base64');
exports.default = random;
//# sourceMappingURL=random.js.map