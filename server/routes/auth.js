import express from 'express';
import Admin from '../Models/Admin.js';
import Student from '../Models/Student.js';
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

        const student = await Student.findOne({ username });
        if (student) {
            const isMatch = await bcrypt.compare(password, student.password);
            if (isMatch) {
                const token = jwt.sign({ username:student.username,role:'student' }, process.env.STD_SECRET, {
                    expiresIn: '1h'
                });
                res.cookie('token', token, { httpOnly: true ,secure :true });
                // res.status(200).json({ token });
                return res.json({login:true , role:'student'});
            } else {
                res.status(401).json({ message: 'Invalid username or password' });
            }
        } else {
            res.status(404).json({ message: 'student not registered' });
        }
        

    }
    else{
        res.status(404).json({ message: 'User not found' });
    }
});

const verifyAdmin = (req, res, next) => {
    const token = req.cookies.token
    if (!token) return res.status(401).json({ message: 'No token provided' })
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err || decoded.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied: not admin' })
      }
      req.username = decoded.username
      req.role = decoded.role
      next()
    })
  }
  

const verifyUser = async (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                jwt.verify(token, process.env.STD_SECRET, (err, decoded) => {
                    if (err) {
                        res.status(401).json({ message: 'Invalid User' });
                    } else {
                        req.username = decoded.username;
                        req.role = decoded.role;
                        next();
                    }
                });
            } else {
                req.username = decoded.username;
                req.role = decoded.role;
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'No token provided' });
    }
};


router.get('/verify',verifyUser, (req, res) => {
    return res.json({login:true,role:req.role})
})

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    // res.redirect('/');
    return res.json({logout:true});
});

export { router as adminRouter, verifyAdmin };