const express = require('express');

const itemRoutes =
require('./presentation/routes/itemRoutes');

const app = express();

app.use(express.json());

app.use('/items', itemRoutes);

const PORT =
process.env.PORT || 3002;

app.listen(PORT,()=>{

 console.log(
 `Item Service rodando na porta ${PORT}`
 );

});