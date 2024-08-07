const OrderModel = require('../models/order');

exports.getOrder = async (req, res) => {
    const blogs = await OrderModel.find();
    res.json(blogs);
};

exports.postOrder = async (req, res) => {

    const { orderid } = req.body;
    const { date } = req.body;
    const { name } = req.body;
    const { address } = req.body;
    const { contact} = req.body;
    const { status } = req.body;
    const { product } = req.body;
    const { custom } = req.body;
    const { quantity } = req.body;
    const { message} = req.body;

    const blog = new OrderModel({
        orderid, date,name, address,contact,status, product,custom,quantity,message
    });
    
    const createdBlog = await blog.save();
    res.status(201).json({
        blog: {
            ...createdBlog._doc,
        },
    });

};

exports.deliveryUpdate = async (req, res) => {

    try {
        const updatedPost = await OrderModel.findByIdAndUpdate(
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