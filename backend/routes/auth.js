const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchusers = require('../middleware/fetchusers');

const JWT_SECRET = 'Always';

//create a new user using: POST "/api/auth/createuser". Doesnt require Auth
router.post('/createuser', [
    body('name').isLength({ min: 1 }).withMessage('Name is required'),
    body('email').isLength({ min: 1 }).withMessage('Email is required'),
    body('email').isEmail().withMessage('Email is not vaild'),
    body('password').isLength({ min: 5 }).withMessage('Invalid password. Password must be at least 5 characters long')

], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }   

    try{

        // Check if email exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({success, msg: 'User with this email already exists' });
        }
        // If email doesnt exist, create new user 

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });
        
        const data = {
            user:{
                id: user.id
            }
        }
        const authToken =  jwt.sign(data, JWT_SECRET);
        
        // res.json(user);
        success = true;
        res.json({success, authToken})

    }
    catch(err){
        console.log(err);
        res.status(500).json({ errors: [{ msg: 'Server error' }] });
}

})

//login using: POST "/api/auth/login". Doesnt require Auth
router.post('/login', [
    body('email').isLength({ min: 1 }).withMessage('Email is required'),
    body('email').isEmail().withMessage('Email is not vaild'),
    body('password').isLength({ min: 1 }).withMessage('Password is required')

], async (req, res) => {

    let success = false;
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

    const { email, password } = req.body;
    try{
        // Check if email exists
        let user = await User.findOne({ email: email });
        if (!user) {
            success = false
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        // If email exists, check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            success = false
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        // If password is correct, create token and send it back to client
        const payload = {
            user:{
                id: user.id
            }
        }
        const authToken =  jwt.sign(payload, JWT_SECRET);
        success = true
        res.json({success, authToken})
    }
        
    catch(err){
        console.log(err);
        res.status(500).json({ errors: [{ msg: 'Server error' }] });
    }
})


// Get userdetails using: POST "/api/auth/getuser". Auth required
router.post('/getuser', fetchusers, async (req, res) => {
    try {
        userID = req.user.id;
        const user = await User.findById(userID).select("-password");
        res.send(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({ errors: [{ msg: 'Server error' }] });    
    }
} )

module.exports = router