import express from 'express'
const AdminRouter = express.Router()
import {AdminloginUser, DeleteAllUsers, DeleteUserByid, GetAllUsers} from '../controller/adminController'

AdminRouter.post('/login', AdminloginUser)
AdminRouter.get('/getallusers', GetAllUsers)
AdminRouter.delete('/deleteallusers', DeleteAllUsers)
AdminRouter.delete('/deleteuserbyid/:id', DeleteUserByid)

export default AdminRouter