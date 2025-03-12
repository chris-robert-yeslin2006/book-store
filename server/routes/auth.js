import express from 'express';
import Admin from '../Models/Admin.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password ,role} = req.body;
    if(role === 'admin'){
        const admin = await Admin.findOne({ username });
        if (admin) {
            const isMatch = await bcrypt.compare(password, admin.password);
            if (isMatch) {
                const token = jwt.sign({ username:admin.username,role:'admin' }, process.env.JWT_SECRET, {
                    expiresIn: '1h'
                });
                res.cookie('token', token, { httpOnly: true ,secure :true });
                // res.status(200).json({ token });
                return res.json({login:true , role:'admin'});
            } else {
                res.status(401).json({ message: 'Invalid username or password' });
            }
        } else {
            res.status(404).json({ message: 'admin not registered' });
        }
    }
    else if(role=='student'){

    }
    else{
        res.status(404).json({ message: 'User not found' });
    }
});

export { router as adminRouter };