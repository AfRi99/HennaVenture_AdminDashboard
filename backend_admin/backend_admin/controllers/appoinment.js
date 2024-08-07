const AppoinmentPackageModel = require('../models/appoinmentPackage');
const AppoinmentIndividualModel = require('../models/appoinmentIndividual');
const ConfirmAppoinmentPackageModel = require('../models/confirmAppoinmentPackage');
const ConfirmAppoinmentIndividualModel = require('../models/confirmAppoinmentIndividual');

exports.getAppoinmentPackage = async (req, res) => {
    const blogs = await AppoinmentPackageModel.find();
    res.json(blogs);
};

exports.postConfirmAppoinmentPackage = async (req, res) => {

    const { firstname } = req.body;
    const { lastname } = req.body;
    const { email } = req.body;
    const { phone } = req.body;
    const { address} = req.body;
    const { city } = req.body;
    const { district } = req.body;
    const { time } = req.body;
    const { wedding } = req.body;
    const { design} = req.body;
    const { package_type} = req.body;
    const { artist} = req.body;

    const blog = new ConfirmAppoinmentPackageModel({
        firstname, lastname,email, phone,address,city, district,time,wedding,design,package_type,artist
    });
    
    const createdBlog = await blog.save();
    res.status(201).json({
        blog: {
            ...createdBlog._doc,
        },
    });

};

exports.deleteAppoinmentPackage = async (req, res) => {

    try {
        const deletedPost = await AppoinmentPackageModel.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'not found' });
        }
        res.json({ message: 'deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.getAppoinmentIndividual = async (req, res) => {
    const blogs = await AppoinmentIndividualModel.find();
    res.json(blogs);
};

exports.postConfirmAppoinmentIndividual = async (req, res) => {

    const { firstname } = req.body;
    const { lastname } = req.body;
    const { email } = req.body;
    const { phone } = req.body;
    const { address1} = req.body;
    const { address2} = req.body;
    const { city } = req.body;
    const { district } = req.body;
    const { time } = req.body;
    const { wedding } = req.body;
    const { type_mehendi } = req.body;
    const { design} = req.body;
    const { mehendi_on} = req.body;
    const { mehendi_for} = req.body;
    const { artist} = req.body;

    const blog = new ConfirmAppoinmentIndividualModel({
        firstname, lastname,email, phone,address1,address2,city, district,time,wedding,type_mehendi,design,mehendi_on,mehendi_for,artist
    });
    
    const createdBlog = await blog.save();
    res.status(201).json({
        blog: {
            ...createdBlog._doc,
        },
    });

};

exports.deleteAppoinmentIndividual = async (req, res) => {

    try {
        const deletedPost = await AppoinmentIndividualModel.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'not found' });
        }
        res.json({ message: 'deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



exports.getConfirmAppoinmentPackage = async (req, res) => {
    const blogs = await ConfirmAppoinmentPackageModel.find();
    res.json(blogs);
};
exports.getConfirmAppoinmentIndividual = async (req, res) => {
    const blogs = await ConfirmAppoinmentIndividualModel.find();
    res.json(blogs);
};