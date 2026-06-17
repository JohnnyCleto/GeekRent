const express =
require('express');

const authRoutes =
require('./presentation/routes/authRoutes');

const app =
express();

app.use(express.json());

app.use('/auth', authRoutes);

app.get('/', (req,res)=>{

res.json({

service:'GeekRent Auth Service',

status:'online'

});

});

app.get('/health',(req,res)=>{

res.json({

status:'ok'

});

});

module.exports = app;