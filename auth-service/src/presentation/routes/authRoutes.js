const express =
require('express');

const router =
express.Router();

const AuthController =
require('../controllers/AuthController');

router.post(
    '/register',
    AuthController.register
);

router.post(
    '/login',
    AuthController.login
);

const express =
require('express');

const router =
express.Router();

const ProfileController =
require('../controllers/ProfileController');

const authMiddleware =
require('../middlewares/authMiddleware');

router.get(

    '/me',

    authMiddleware,

    ProfileController.getProfile

);

router.get(
    '/dashboard',
    authMiddleware,
    DashboardController.getDashboard
);

module.exports =
router;