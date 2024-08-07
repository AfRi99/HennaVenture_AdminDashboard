const express = require('express');
const storage = require('../helpers/storage');
const router = express.Router();

const repoController = require('../controllers/repository');
const productController = require('../controllers/product');
const appoinmentController = require('../controllers/appoinment');
const artistController = require('../controllers/artist');
const orderController = require('../controllers/order');
const ReviewController = require('../controllers/review');
const MessageController = require('../controllers/message');


router.post('/repoupload', repoController.postRepo);
router.get('/getrepo', repoController.getRepo);
router.put('/editrepo/:id', repoController.putRepo);
router.delete('/deleterepo/:id', repoController.deleteRepo);

router.post('/addProduct', productController.postProduct);
router.get('/getProduct', productController.getProduct);
router.put('/editProduct/:id', productController.putProduct);
router.put('/stockUpdate/:id', storage, productController.stockUpdate);
router.delete('/deleteProduct/:id', productController.deleteProduct);

router.get('/getAppoinmentPackage', appoinmentController.getAppoinmentPackage);
router.post('/addConfirmAppoinmentPackage',storage, appoinmentController.postConfirmAppoinmentPackage);
router.delete('/deleteAppoinmentPackage/:id', appoinmentController.deleteAppoinmentPackage);
router.get('/getAppoinmentIndividual', appoinmentController.getAppoinmentIndividual);
router.post('/addConfirmAppoinmentIndividual',storage, appoinmentController.postConfirmAppoinmentIndividual);
router.delete('/deleteAppoinmentIndividual/:id', appoinmentController.deleteAppoinmentIndividual);
router.get('/getConfirmAppoinmentPackage', appoinmentController.getConfirmAppoinmentPackage);
router.get('/getConfirmAppoinmentIndividual', appoinmentController.getConfirmAppoinmentIndividual);

router.get('/getArtist', artistController.getArtist);
router.get('/getConfirmArtist', artistController.getConfirmArtist);
router.delete('/deleteArtist/:id', artistController.deleteArtist);
//
router.post('/sendMail',storage, artistController.mail);
router.post('/removeConfirmArtist',storage, artistController.removeConfirmArtist);
//

router.get('/getOrder', orderController.getOrder);
router.post('/addOrder',storage, orderController.postOrder);
router.put('/deliveryUpdate/:id', storage, orderController.deliveryUpdate);

router.get('/getReview', ReviewController.getReview);
router.delete('/deleteReview/:id', ReviewController.deleteReview);

router.get('/getMessage', MessageController.getMessage);
router.post('/addMessage',storage, MessageController.postMessage);
router.put('/messageStatusUpdate/:id', storage, MessageController.statusUpdate);
router.delete('/deleteMessage/:id', MessageController.deleteMessage);


module.exports = router;