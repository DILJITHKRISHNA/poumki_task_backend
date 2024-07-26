"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.post('/register', (req) => {
    console.log("hiiii");
    try {
        const { firstname, lastname, email } = req.body;
        console.log(firstname, lastname, email, "from bodyy");
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=userController.js.map