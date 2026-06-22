export const registerValidator = (req,res,next) =>{
    const {fullName,email,password,mobileNumber,role} = req.body;

    if(!fullName || !email || !password || !mobileNumber || !role){
        return res.status(400).json({message: "All fields are required"})
    }
    next();
}