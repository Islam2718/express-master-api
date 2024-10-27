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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const database_1 = require("../config/database");
const User_1 = require("../entities/User");
const userRepository = database_1.AppDataSource.getRepository(User_1.User);
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () { return yield userRepository.find(); });
exports.getAllUsers = getAllUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield userRepository.findOneBy({ id }); });
exports.getUserById = getUserById;
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () { return yield userRepository.save(user); });
exports.createUser = createUser;
const updateUser = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    yield userRepository.update(id, user);
    return (0, exports.getUserById)(id);
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield userRepository.delete(id); });
exports.deleteUser = deleteUser;