const express = require('express');
const router = express.Router(); // Crea un enrutador
const QrController = require('./controllers/qrController'); // Asegúrate de que la ruta al controlador sea correcta

//ruta para guardar el valor del codigo encriptado

router.post ('/save',QrController.saveEncryptedCode );

//generar y asignar un codiqgoqr a un accesorio
router.post('/', QrController.saveCodeQR);



module.exports = router; // Exporta el enrutador
