"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.get('/', ({}, res) => {
    res.send('Hello Worfdddld!');
});
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
//# sourceMappingURL=index.js.map