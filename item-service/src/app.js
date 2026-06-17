const express =
require('express');

const itemRoutes = require('./presentation/routes/itemRoutes');

const app =
express();

app.use(express.json());

app.use('/items', itemRoutes);

module.exports = app;