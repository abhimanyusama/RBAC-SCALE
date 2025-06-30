import Post from '../models/Post.js';

export const canEditPost = async (req, res, next) => {
    try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    // Only author or admin can edit
    if (post.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Access denied: You are not the owner' });
    }

    req.post = post;
    next();
} catch (err) {
    res.status(500).json({ error: 'ACL error' });
}
};
