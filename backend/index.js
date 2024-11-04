const express = require('express');
const cors = require('cors');
const equiposRoutes = require('./routes/equiposRoutes');
const jugadoresRoutes = require('./routes/jugadoresRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/equipos', equiposRoutes);
app.use('/jugadores', jugadoresRoutes);
app.use('/usuarios', usuariosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));