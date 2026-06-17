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

const cors = require('cors');

app.use(cors({

origin:[

'https://natural-expression-production-583b.up.railway.app'

],

credentials:true

}));

module.exports = app;