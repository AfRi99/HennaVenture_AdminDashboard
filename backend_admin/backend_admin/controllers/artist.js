const ArtistModel = require('../models/artist');
const ConfirmArtistModel = require('../models/confirmArtist');
const ReviewModel = require('../models/review');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');


exports.getArtist = async (req, res) => {
    const blogs = await ArtistModel.find();
    res.json(blogs);
};

exports.getConfirmArtist = async (req, res) => {
    const blogs = await ConfirmArtistModel.find();
    res.json(blogs);
};


exports.deleteArtist = async (req, res) => {

    try {
        const deletedPost = await ArtistModel.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'not found' });
        }
        res.json({ message: 'deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



exports.mail = async (req, res) => {

    const { id } = req.body;

    const { fullname } = req.body;
    const { phone } = req.body;
    const { email } = req.body;
    const { location } = req.body;
    const { prework } = req.body;
    const { certificate } = req.body;
    const { is_approved } = req.body;
    const { username } = req.body;
    const { password } = req.body;
    const { pass } = req.body;

    const blog = new ConfirmArtistModel({
        fullname, phone, email, location, prework, certificate, is_approved, username, password, pass
    });
    const createdBlog = await blog.save();

    //delete
    const deleted = await ArtistModel.findByIdAndDelete(id);
    //


    let config = {
        service: 'gmail',
        auth: {
            user: 'onejk2185@gmail.com',
            pass: 'xlpv ulxa sdgv lcwj'
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Henna Ventures",
            link: 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name: fullname,
            intro: "Congratulations! You have been selected to join us. Here, you can find your username and password",
            table: {
                data: [
                    {
                        username: username,
                        password: pass
                    }
                ]
            },
            outro: "Thank you."
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from: 'onejk2185@gmail.com',
        to: email,
        subject: "Selection Confirmation",
        html: mail
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should receive an email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

}

exports.removeConfirmArtist = async (req, res) => {

    const { id } = req.body;
    const { fullname } = req.body;

    //review delete
    const deleteReview = await ReviewModel.findByIdAndDelete(id);
    //

    const blogs = await ConfirmArtistModel.find();

    const subArray = [];
    blogs.map((item) => {
        if (item.fullname === fullname) {
            subArray.push(item)
        }
    });


    if (subArray.length == 0) {
        res.status(201).json('The Artist Not Available');
    } else {
        const findId = subArray[0]._id;

        try {
            const deletedPost = await ConfirmArtistModel.findByIdAndDelete(findId);
            if (!deletedPost) {
                return res.status(404).json({ message: 'not found' });
            }
            res.json({ message: 'deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

};
