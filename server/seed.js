// seed.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { Connection } from "./db.js";
import Admin from "./Models/Admin.js";

dotenv.config();

await Connection();

async function adminAccount() {
    
  try {
    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      const hashedPassword = await bcrypt.hash("adminpassword", 10);
      const newAdmin = new Admin({
        username: "admin",
        password: hashedPassword,

      });

      await newAdmin.save();
      console.log("✅ Admin created");
    } else {
      console.log("✅ Admin already exists");
    }
  } catch (err) {
    console.error("❌ Error seeding admin:", err.message);
  } finally {
    mongoose.disconnect();
  }
}

adminAccount();
