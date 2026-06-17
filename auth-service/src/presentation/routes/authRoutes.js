// src/presentation/routes/authRoutes.js

const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');
const ProfileController = require('../controllers/ProfileController');
const DashboardController = require('../controllers/DashboardController');

const authMiddleware = require('../middlewares/authMiddleware');

/**
 * AUTH
 */
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

/**
 * PROFILE
 * (rota única e padrão)
 */
router.get('/me', authMiddleware, ProfileController.getProfile);

/**
 * DASHBOARD
 */
router.get('/dashboard', authMiddleware, DashboardController.getDashboard);

module.exports = router;