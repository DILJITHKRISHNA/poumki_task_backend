import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import env from 'dotenv'
env.config()
import { getUserByEmail, UserModel, getUsers, deleteUserById } from '../../src/model/UserSchema'


export const AdminloginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill in all fields" })
        } else {
            const existingUser = await getUserByEmail(email)
            const CheckAdmin = await UserModel.findOne({ isAdmin: true })
            if (existingUser && CheckAdmin) {
                const isMatch = await bcrypt.compare(password, existingUser.password)
                if (isMatch) {
                    const secretKey = process.env.TOKEN_KEY as string
                    const token = await jwt.sign({ _id: existingUser._id }, secretKey, { expiresIn: '24h' })
                    return res.status(200).json({ success: true, message: "Admin login successfull!", existingUser, token })
                } else {
                    return res.status(400).json({ message: "Invalid password" })
                }
            } else {
                return res.status(400).json({ message: "admin not exist" })
            }
        }
    } catch (error) {
        console.log(error);

    }
}

export const GetAllUsers = async (req: Request, res: Response) => {
    try {
        const Allusers = await UserModel.find({ isAdmin: false });

        if (Allusers) {
            return res.status(200).json({ success: true, message: "All users fetched successfully", Allusers })
        } else {
            return res.status(400).json({ message: "No users found" })
        }
    } catch (error) {
        console.log(error);

    }
}
export const DeleteAllUsers = async (req: Request, res: Response) => {

    try {
        const deleteAllusers = await UserModel.deleteMany({ isAdmin: false })

        if (deleteAllusers) {
            return res.status(200).json({ success: true, message: "All users Deleted successfully", deleteAllusers })
        } else {
            return res.status(400).json({ message: "Failed to delete users" })
        }
    } catch (error) {
        console.log(error);

    }
}
export const DeleteUserByid = async (req: Request, res: Response) => {

    try {
        const { id } = req.params
        const deleteuser = await deleteUserById(id)
        if (deleteuser) {
            return res.status(200).json({ success: true, message: "User Deleted successfully", deleteuser })
        } else {
            return res.status(400).json({ message: "Failed to delete user" })
        }
    } catch (error) {
        console.log(error);

    }
}