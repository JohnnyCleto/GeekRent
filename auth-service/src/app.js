require('dotenv').config();

const express = require('express');
const cors = require('cors');

const authRoutes = require('./presentation/routes/authRoutes');
const initDatabase = require('./infrastructure/database/initDatabase');

const app = express();

/**
 * 🔥 CORS CORRETO (SEM BUG DE PRODUÇÃO)
 */
app.use(cors({
    origin: [
        'https://natural-expression-production-583b.up.railway.app'
    ],
    credentials: true
}));

app.use(express.json());

/**
 * ROUTES
 */
app.use('/auth', authRoutes);

/**
 * HEALTH
 */
app.get('/', (req, res) => {
    res.json({
        service: 'GeekRent Auth Service',
        status: 'online'
    });
});

app.get('/health', (req, res) => {
    res.json({
        status: 'ok'
    });
});

const PORT = process.env.PORT || 3001;

(async () => {
    try {

        await initDatabase();
        console.log("DB conectado com sucesso");

        app.listen(PORT, () => {
            console.log(`Auth Service rodando na porta ${PORT}`);
        });

    } catch (error) {

        console.error('ERRO AO INICIAR DB:', error);

        process.exit(1);
    }
})();