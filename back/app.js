const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(bodyParser.json({limit:'10mb'}));
// En tu archivo de servidor (index.js o app.js)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


// Routes
const userRoutes = require('./routes/userRoutes');
const accesorieRoutes = require('./routes/accesorioRoutes');
const codeQRRoutes = require('./routes/qrRoutes');
const permissionRoutes = require('./routes/permissionRoutes');

app.use('/users', userRoutes);

app.use('/accesories', accesorieRoutes);
app.use('/codeqr', codeQRRoutes);
app.use('/permissions', permissionRoutes);

// Error Handling Middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'Algo salió mal en el servidor' });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
