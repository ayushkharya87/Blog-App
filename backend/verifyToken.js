// const jwt=require('jsonwebtoken')

// const verifyToken=(req,res,next)=>{
//     const token=req.cookies.token
//     // console.log(token)
//     if(!token){
//         return res.status(401).json("You are not authenticated!")
//     }
//     jwt.verify(token,process.env.SECRET,async (err,data)=>{
//         if(err){
//             return res.status(403).json("Token is not valid!")
//         }
        
//         req.userId=data._id
       
//         // console.log("passed")
        
//         next()
//     })
// }

// module.exports=verifyToken



const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ error: "Authentication token missing" });
        }

        const decodedToken = await jwt.verify(token, process.env.SECRET);
        req.userId = decodedToken._id;

        // Proceed to the next middleware/route handler
        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: "Invalid token" });
        } else {
            // Handle other types of errors
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
};

module.exports = verifyToken;
