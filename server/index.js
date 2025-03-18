import express from 'express';
import dotenv from 'dotenv';
import cors from'cors';
import cookieParser from 'cookie-parser';
import {Connection} from './db.js'

import { adminRouter } from './routes/auth.js';
import { studentRouter } from './routes/student.js';
import { bookRouter } from './routes/book.js';

import Book from './Models/Book.js';
import Admin from './Models/Admin.js';
import Student from './Models/Student.js';

dotenv.config();
Connection();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(
  {
    origin: ['http://localhost:5173'],
    credentials: true
  }
));

app.use('/auth', adminRouter);
app.use('/student', studentRouter);
app.use('/book', bookRouter);
app.get('/dashboard', async (req, res) => {
  try {
    const students = await Student.countDocuments();
    const admins = await Admin.countDocuments();
    const books = await Book.countDocuments();

    res.json({ ok: true, students, admins, books });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: 'Server Error' });
  }
});




app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
