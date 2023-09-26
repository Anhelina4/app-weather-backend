"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hash = void 0;
const crypto_1 = __importDefault(require("crypto"));
const SECRET = 'APP_WEATHER_SECRET_AUTH_KEY';
const hash = (salt, password) => {
    return crypto_1.default
        .createHmac('sha256', [salt, password].join('/'))
        .update(SECRET)
        .digest('hex');
};
exports.hash = hash;
//# sourceMappingURL=hash.js.map