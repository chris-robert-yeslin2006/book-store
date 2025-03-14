// Models/Admin.js
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    roll:{type: String, required: true},
  username: { type: String, required: true },
  password: { type: String, required: true },
  grade: { type: String, required: true }
});

const Student = mongoose.model("student",studentSchema);

export default Student;
