const RepoModel = require('../models/repository');
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
    storage: Storage
}).single('repoImage')


exports.postRepo = async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            const newRepo = new RepoModel({
                name: req.body.name,
                category: req.body.category,
                image: {
                    data: fs.readFileSync('uploads/' + req.file.filename),
                    contentType: 'image/png',
                }
            })
            newRepo.save()
                .then(() => res.send('successfully uploaded'))
                .catch((err) => console.log(err));
        }
    });
};

exports.getRepo = async (req, res) => {
    const blogs = await RepoModel.find();
    res.json(blogs);
};

exports.putRepo = async (req, res) => {

    upload(req, res, async (err) => {
        if (err) {
            console.log(err)
        }
        else {
            try {
                const updateRepo = await RepoModel.findByIdAndUpdate(
                    req.params.id,
                    {
                        name: req.body.name,
                        category: req.body.category,
                        image: {
                            data: fs.readFileSync('uploads/' + req.file.filename),
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

exports.deleteRepo = async (req, res) => {

    try {
        const deletedPost = await RepoModel.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Repo not found' });
        }
        res.json({ message: 'Repo deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

