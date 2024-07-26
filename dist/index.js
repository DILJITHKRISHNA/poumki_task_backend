import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;
app.use(cors());
app.get('/', ({}, res) => {
    res.send('Hello Worfdddld!');
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
//# sourceMappingURL=index.js.map