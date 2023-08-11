// sync-models.js

const sequelize = require('./config/sequelize');
const Accesorie = require('./models/accesorie'); // Modelo personalizado
const CodeQR = require('./models/codeqr'); // Modelo personalizado
const Permission = require('./models/permissions')
const User = require('./models/users')

async function syncModels() {
  try {
    await CodeQR.sync();
    await Permission.sync();
    await Accesorie.sync();
    await User.sync();
    
    console.log('Modelos sincronizados correctamente.');
  } catch (error) {
    console.error('Error al sincronizar modelos:', error);
  }
}
console.log('Iniciando sincornizacion de modelos...');
syncModels();
console.log('Find de la sincronizcacion de modelos.')
