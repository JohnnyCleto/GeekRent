const express =
require('express');

const itemRoutes = require('./presentation/routes/itemRoutes');

const app =
express();

app.use(express.json());

app.use('/items', itemRoutes);

app.get('/',(req,res)=>{

res.json({

service:'GeekRent Item Service',

status:'online'

});

});

module.exports = app;