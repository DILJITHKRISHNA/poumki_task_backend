import express from 'express'
const UserRouter = express.Router()
import { loginUser, register } from '../controller/userController'

UserRouter.post('/register', register)
UserRouter.post('/login', loginUser)

export default UserRouter