import express, { Application, Router } from 'express';
import mongoose from 'mongoose'
import cors from 'cors'
import UserRouter from '../interface/routes/UserRouter'
import AdminRouter from '../interface/routes/AdminRoutes'

const app: Application = express()
const port: number = 3000

app.use(cors({
    credentials: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const MONGO_URL = 'mongodb://localhost:27017/poumki-task'
mongoose.connect(MONGO_URL).then(() => {
    console.log('Database connected')
})

app.use('/', UserRouter)
app.use('/admin', AdminRouter)

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})