import express from 'express'
import Student from '../Models/Student.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const router = express.Router()

router.post('/register', async (req, res) => {
    const { roll, username, grade, password } = req.body
    const student=await Student.findOne({roll})
    if(student){
        return res.status(400).json({message: 'Roll number already exists'})
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const newStudent = new Student({ 
            roll, username, grade, password: hashedPassword })
        await newStudent.save()
        // res.status(201).json({ message: 'Student Registered Successfully' })
        return res.json({registered: true})
    } catch (error) {
        res.status(500).json({ message: 'Error Registering Student' })
    }
})

export { router as studentRouter }  