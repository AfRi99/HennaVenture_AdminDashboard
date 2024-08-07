const ReviewModel = require('../models/review');

exports.getReview = async (req, res) => {
    const blogs = await ReviewModel.find();
    res.json(blogs);
};

exports.deleteReview = async (req, res) => {
    try {
        const deletedPost = await ReviewModel.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'not found' });
        }
        res.json({ message: 'deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};