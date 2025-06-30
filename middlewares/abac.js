export const requireAttributes = (rules) => {
    return (req, res, next) => {
        const user = req.user;
        
        for (const [key, value] of Object.entries(rules)) {
        if (user?.attributes?.[key] !== value) {
            return res.status(403).json({ error: `Access denied: Missing required attribute '${key}'` });
        }
    }

    next();
    };
};