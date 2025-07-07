export const allowRoles = (...allowedRoles) => {
    return(req, res, next) => {
        const user  = req.user;
        if (!user || !allowedRoles.includes(user.role))
            {
                return res.status(403).json({message:"Access denied: Role not allowed"});
        }
        next();
    }
}
