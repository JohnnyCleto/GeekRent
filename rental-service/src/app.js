const express =
require('express');

const rentalRoutes =
require('./presentation/routes/rentalRoutes');

const app =
express();

app.use(express.json());

app.use('/rentals', rentalRoutes);
app.get('/',(req,res)=>{

res.json({

service:'GeekRent Rental Service',

status:'online'

});

});

module.exports = app;