require('dotenv').config();

const express = require('express');
const cors = require('cors');

const authRoutes =
require('./presentation/routes/authRoutes');

const initDatabase =
require('./infrastructure/database/initDatabase');

const profileRoutes =
require('./presentation/routes/profileRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {

    res.json({
        service: 'GeekRent Auth Service',
        status: 'online'
    });

});

app.use('/auth', authRoutes);

const PORT =
process.env.PORT || 3001;

(async () => {

    try {

        await initDatabase();

        app.listen(PORT, () => {

            console.log(
                `Auth Service rodando na porta ${PORT}`
            );

        });

    } catch (error) {

        console.error(
            'Erro ao iniciar banco:',
            error
        );

        process.exit(1);

    }

})();