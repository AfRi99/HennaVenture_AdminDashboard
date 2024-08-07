const MessageModel = require('../models/message');

exports.getMessage = async (req, res) => {
    const blogs = await MessageModel.find();
    res.json(blogs);
};

exports.postMessage = async (req, res) => {

    const { username } = req.body;
    const { email } = req.body;
    const { message } = req.body;
    const { status } = req.body;

    const blog = new MessageModel({
        username, email,message, status
    });
    
    const createdBlog = await blog.save();
    res.status(201).json({
        blog: {
            ...createdBlog._doc,
        },
    });

};

exports.statusUpdate = async (req, res) => {

    try {
        const updatedPost = await MessageModel.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status
            },
            { new: true }
        );
        res.json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteMessage = async (req, res) => {
    try {
        const deletedPost = await MessageModel.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'not found' });
        }
        res.json({ message: 'deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};