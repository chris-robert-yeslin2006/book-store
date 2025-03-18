import express from 'express'
import Student from '../Models/Student.js'
import bcrypt from 'bcrypt'
import { verifyAdmin } from './auth.js'

const router = express.Router()

router.post('/register', verifyAdmin, async (req, res) => {
  const { roll, username, grade, password } = req.body

  if (!roll || !username || !grade || !password) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  const existingStudent = await Student.findOne({ roll })
  if (existingStudent) {
    return res.status(400).json({ message: 'Roll number already exists' })
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const newStudent = new Student({
      roll,
      username,
      grade,
      password: hashedPassword
    })
    await newStudent.save()
    return res.json({ registered: true })
  } catch (error) {
    console.error('Error saving student:', error)
    res.status(500).json({ message: 'Error registering student' })
  }
})

export { router as studentRouter }
