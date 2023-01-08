const jwt = require("jsonwebtoken");

const checkLogin  = (req, res, next)=>{
    const {token}  = req.cookies;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECREAT);
        const {email, userId} = decoded;
        req.email = email;
        req.userId = userId;
        next();
    } catch (err) {
        next("Authentication required!")
    }
}


// module export 
module.exports = checkLogin;