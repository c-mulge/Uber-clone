const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controller');
const { body }= require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name should be at least 3 characters'),
    body('password').isLength({min:6}).withMessage('Password should be at least 6 characters'),
    body('vehicle.color').isLength({min:3}).withMessage('Color should be at least 3 characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate should be at least 3 characters'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity should be at least 1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle type')

],captainController.registerCaptain);


router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage
    ('Password should be at least 6 characters')
],
captainController.loginCaptain);


router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports =router;