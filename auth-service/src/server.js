require('dotenv').config();

const express =
require('express');

const cors =
require('cors');

const authRoutes =
require('./presentation/routes/authRoutes');

const app =
express();

app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{

    res.json({
        service:
            'GeekRent Auth Service',
        status:
            'online'
    });

});

app.use('/auth',authRoutes);

const PORT =
process.env.PORT || 3001;

app.listen(PORT,()=>{

    console.log(
        `Auth Service rodando na porta ${PORT}`
    );

});

const initDatabase =
require('./infrastructure/database/initDatabase');

(async () => {

    await initDatabase();

    app.listen(PORT, () => {

        console.log(
            `Servidor rodando na porta ${PORT}`
        );

    });

})();