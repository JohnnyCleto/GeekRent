require('dotenv').config();

const express =
require('express');

const rentalRoutes =
require(
'./presentation/routes/rentalRoutes'
);

const app =
express();

app.use(
express.json()
);

app.use(
'/rentals',
rentalRoutes
);

const PORT =
process.env.PORT ||
3003;

app.listen(
PORT,
() => {

console.log(
`Rental Service rodando na porta ${PORT}`
);

});