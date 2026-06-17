const express =
require('express');

const rentalRoutes =
require('./presentation/routes/rentalRoutes');

const app =
express();

app.use(express.json());

app.use('/rentals', rentalRoutes);

module.exports = app;