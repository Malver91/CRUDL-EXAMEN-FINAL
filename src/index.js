require('dotenv').config();
const express = require('express');
const app = express();

const usuarioRoutes = require('./adapters/routes/usuarioRoutes');
const vehiculoRoutes = require('./adapters/routes/vehiculoRoutes');

app.use(express.json());

// Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/vehiculos', vehiculoRoutes);

// error handler básico
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'error en el servidor' });
});

const PORT = process.env.APP_PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
