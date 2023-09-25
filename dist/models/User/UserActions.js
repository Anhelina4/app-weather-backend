"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.deleteUserById = exports.createUser = exports.getUserById = exports.getUserBySessionToken = exports.getUserByEmail = exports.getUsers = void 0;
const UserModel_1 = require("./UserModel");
// User model actions
const getUsers = () => UserModel_1.UserModel.find();
exports.getUsers = getUsers;
const getUserByEmail = (email) => UserModel_1.UserModel.findOne({ email });
exports.getUserByEmail = getUserByEmail;
// this is for checking if user logged in
const getUserBySessionToken = (sessionToken) => UserModel_1.UserModel.findOne({ 'authentication.sessionToken': sessionToken });
exports.getUserBySessionToken = getUserBySessionToken;
const getUserById = (id) => UserModel_1.UserModel.findById(id);
exports.getUserById = getUserById;
const createUser = (values) => new UserModel_1.UserModel(values).save().then((user) => {
    user.toObject();
});
exports.createUser = createUser;
const deleteUserById = (id) => UserModel_1.UserModel.findOneAndDelete({ _id: id });
exports.deleteUserById = deleteUserById;
const updateUserById = (id, values) => UserModel_1.UserModel.findByIdAndUpdate(id, values);
exports.updateUserById = updateUserById;
//# sourceMappingURL=UserActions.js.map