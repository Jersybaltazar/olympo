// sync-models.js

const sequelize = require('./config/sequelize');
const accesorie = require('./models/accesorie'); // Modelo personalizado
const CodeQR = require('./models/codeqr'); // Modelo personalizado
const Permission = require('./models/permissions')
const User = require('./models/users')

async function syncModels() {
  try {
    await sequelize.sync();
    console.log('Modelos sincronizados correctamente.');
  } catch (error) {
    console.error('Error al sincronizar modelos:', error);
  }
}

syncModels();
