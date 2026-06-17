const express =
require('express');

const authRoutes =
require('./src/presentation/routes/authRoutes');

const app =
express();

app.use(express.json());

app.use('/auth', authRoutes);

module.exports = app;