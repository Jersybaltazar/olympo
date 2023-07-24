const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001; // Puedes elegir cualquier puerto que desees

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/nombre-de-tu-base-de-datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos');
});

app.listen(PORT, () => {
  console.log(`El servidor backend está escuchando en el puerto ${PORT}`);
});
