import express from 'express';
const app = express();
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