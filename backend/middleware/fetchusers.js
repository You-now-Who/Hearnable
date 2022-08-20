//Middleware is basically a function to run in between 2 funcs

var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Always';

const fetchusers = (req, res, next) => {
    //Get user from token
    const token = req.header('auth-token');
    if (!token){
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try{
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified.user;
    }
    catch(err){
        return res.status(400).json({ msg: 'Token is not valid' });
    }

    next();

}

module.exports = fetchusers;