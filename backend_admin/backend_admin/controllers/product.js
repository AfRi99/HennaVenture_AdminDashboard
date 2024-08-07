const ProductModel = require('../models/product');
const multer = require('multer');
const fs = require("fs");

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage: Storage,
});

const multipleUpload = upload.fields([{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }])


exports.postProduct = async (req, res) => {

    multipleUpload(req, res, (err) => {

        if (err) {
            console.log(err)
        }
        else {
            const newRepo = new ProductModel({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category,
                count: req.body.count,
                image1: {
                    data: fs.readFileSync('uploads/' + req.files.image1[0].filename),
                    contentType: 'image/png',
                },
                image2: {
                    data: fs.readFileSync('uploads/' + req.files.image2[0].filename),
                    contentType: 'image/png',
                },
                image3: {
                    data: fs.readFileSync('uploads/' + req.files.image3[0].filename),
                    contentType: 'image/png',
                },
            })
            newRepo.save()
                .then(() => res.send('successfully uploaded'))
                .catch((err) => console.log(err));
        }
    })

};

exports.getProduct = async (req, res) => {
    const blogs = await ProductModel.find();
    res.json(blogs);
};

exports.putProduct = async (req, res) => {

    multipleUpload(req, res, async (err) => {

        if (err) {
            console.log(err)
        }
        else {
            try {
                const updateRepo = await ProductModel.findByIdAndUpdate(
                    req.params.id,
                    {
                        name: req.body.name,
                        description: req.body.description,
                        price: req.body.price,
                        category: req.body.category,
                        count: req.body.count,
                        image1: {
                            data: fs.readFileSync('uploads/' + req.files.image1[0].filename),
                            contentType: 'image/png',
                        },
                        image2: {
                            data: fs.readFileSync('uploads/' + req.files.image2[0].filename),
                            contentType: 'image/png',
                        },
                        image3: {
                            data: fs.readFileSync('uploads/' + req.files.image3[0].filename),
                            contentType: 'image/png',
                        }
                    },
                    { new: true }
                );
                res.json(updateRepo);
            } catch (err) {
                res.status(400).json({ message: err.message });
            }

        }

    });

};

exports.stockUpdate = async (req, res) => {

    try {
        const updatedPost = await ProductModel.findByIdAndUpdate(
            req.params.id,
            {
                count: req.body.count
            },
            { new: true }
        );
        res.json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


exports.deleteProduct = async (req, res) => {

    try {
        const deletedPost = await ProductModel.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

