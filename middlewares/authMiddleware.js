import User from "../models/User.js"

const isAuthenticated = async (req,res,next)=>{
    if(! req.session.userId)
    {
        return res.status(401).json({message:"unauthorized"});
    }

    const user = await User.findById(req.session.userId);
    if (! user)
    {
        return res.status(401).json({message:"unauthorized"});
    }
    req.user = user;
    next();
}

export default isAuthenticated;