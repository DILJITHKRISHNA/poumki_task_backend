import express from 'express'
const UserRouter = express.Router()
import { GetSingleUser, loginUser, register } from '../controller/userController'

UserRouter.post('/register', register)
UserRouter.post('/login', loginUser)
UserRouter.get('/getsingleuser/:id', GetSingleUser)

export default UserRouter