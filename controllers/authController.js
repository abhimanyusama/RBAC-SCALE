import User from '../models/User.js'
import bcrypt from "bcrypt"

 

export const signup = async (req, res) => {
  try {
    const { username, email, password, role, attributes } = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message:"user already exists"});
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({ username, email, password:hashedPassword, role, attributes });
    await user.save();
    return res.status(201).json({message:"user created successfully",user: { id: user._id, username: user.username, role: user.role } });
  } catch (err) {
    console.log("error in login api", err);
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
    try{
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user)
    {
        return res.status(401).json({message:"invalid credentials"});
    }
    const isMatched = await bcrypt.compare(password, user.password)

    if(! isMatched){
        return res.status(401).json({message:"invalid credentials"});
    }
    req.session.userId = user._id;
    return res.status(201).json({ message: 'Login successful', user: { id: user._id, username: user.username, role: user.role } });
}
catch(err)
{
    console.log("error in login", err);
    return res.status(500).json({message:"internal server error"});
}
};

export const logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
        console.log("logout api", err);
        return res.status(500).json({ message: 'logout failed' });}
    res.clearCookie('connect.sid');
    return res.status(201).json({ message: 'Logged out successfully' });
  });
};
