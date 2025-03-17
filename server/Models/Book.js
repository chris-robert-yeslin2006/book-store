// Models/Admin.js
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  imageURL: { type: String, required: true },
  description: { type: String, required: false }, // ✅ Add this line
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
