const qr = require('qrcode');
const QRCode = require('../../models/codeqr');
const Accesorie = require('../../models/accesorie');



exports.createAccessoryWithQRCode = async (req, res) => {
    try {
        // Obtener los datos del formulario
        const {
            nombre,
            marca,
            modelo,
            fechatrabajo,
            precio,
            piezas,
            modouso,
            imagen,
            mantenimiento,
            codeqr  // Este es el valor del QR que proviene del formulario
        } = req.body;

        // Generar el código QR con el valor proporcionado
        const qrCodeImage = await qr.toDataURL(qrData);

        // Crear un nuevo registro de código QR en la base de datos
        const newQRCode = await QRCode.create({ code: qrCodeImage });

        
         // Calcular la fecha de mantenimiento
         const maintenanceInterval = parseInt(mantenimiento);
         const startDate = new Date(purchase_date);
         const nextMaintenanceDate = new Date(startDate.getTime() + maintenanceInterval * 24 * 60 * 60 * 1000);
 
        // Crear un nuevo accesorio y asociarlo al código QR
        const newAccessory = await Accesorie.create({
            nombre,
            marca,
            modelo,
            fechatrabajo,startDate,
            precio,
            piezas,
            modouso,
            imagen,
            mantenimiento:maintenanceInterval, 
            next_maintenance_date: nextMaintenanceDate,
            codeqr : newQRCode.id_qr
        });

        res.status(201).json(newAccessory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el accesorio con código QR.' });
    }
};


