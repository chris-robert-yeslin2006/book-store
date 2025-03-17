// routes/bookRouter.js
import express from 'express';
import Book from '../Models/Book.js';
import { verifyAdmin } from './auth.js';

const router = express.Router();

router.post('/add', async (req, res) => {
  const { name, author, imageURL, description } = req.body;
  const book = await Book.findOne({ name });
  if (book) {
    return res.status(400).json({ message: 'Book name already exists' });
  }
  try {
    const newBook = new Book({ name, author, imageURL, description });
    await newBook.save();
    return res.json({ added: true });
  } catch (error) {
    res.status(500).json({ message: 'Error Registering Book' });
  }
});

router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error Fetching Books' });
  }
});

router.get('/book/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error Fetching Book' });
  }
});

router.put('/book/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body);
    return res.json({ updated: true, book });
  } catch (error) {
    res.status(500).json({ message: 'Error Updating Book' });
  }
});

router.delete('/book/:id', verifyAdmin, async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ deleted: true });
  } catch (error) {
    res.status(500).json({ message: 'Error Deleting Book' });
  }
});

export { router as bookRouter };
