const express =
require('express');

const authRoutes =
require('./presentation/routes/authRoutes');

const app =
express();

app.use(express.json());

app.use('/auth', authRoutes);

module.exports = app;