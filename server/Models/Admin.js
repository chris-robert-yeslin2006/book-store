
// Models/Admin.js
import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;
