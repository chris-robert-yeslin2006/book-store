import express from 'express';
import dotenv from 'dotenv';
import cors from'cors';
import cookieParser from 'cookie-parser';
import {Connection} from './db.js'

import { adminRouter } from './routes/auth.js';
import { studentRouter } from './routes/student.js';
import { bookRouter } from './routes/book.js';

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



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
