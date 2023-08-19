const qr = require('qrcode');
const QRCode = require('../../models/codeqr');
const Accesorie = require('../../models/accesorie');  // Asegúrate de importar el modelo QRCode correctamente

// Generar y asignar un nuevo código QR a un accesorio
exports.generateAndAssignQRCode = async (req, res) => {
    try {
        const { accessoryId } = req.params;

        // Buscar el accesorio por su ID
        const accessory = await Accesorie.findByPk(accessoryId);
        if (!accessory) {
            return res.status(404).json({ error: 'Accesorio no encontrado.' });
        }

        // Generar el código QR con información del accesorio
        const qrData = {
            accessoryId: accessory.id_accesorie,
            accessoryName: accessory.name,
            // Otras propiedades relevantes del accesorio
        };
        const qrCodeImage = await qr.toDataURL(JSON.stringify(qrData));

        // Guardar el código QR en la base de datos
        const newQRCode = await QRCode.create({ code: qrCodeImage });

        // Asignar el código QR al accesorio
        accessory.code_QR  = newQRCode.id_qr;
        await accessory.save();

        res.status(201).json(newQRCode);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al generar y asignar el código QR.' });
    }
};

// Obtener todos los códigos QR
exports.getAllQRCodes = async (req, res) => {
    try {
        const qrCodes = await QRCode.findAll();
        res.status(200).json(qrCodes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los códigos QR.' });
    }
};

// Obtener un código QR por su ID
exports.getQRCodeById = async (req, res) => {
    const { id } = req.params;
    try {
        const qrCode = await QRCode.findByPk(id);
        if (!qrCode) {
            return res.status(404).json({ error: 'Código QR no encontrado.' });
        }
        res.status(200).json(qrCode);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el código QR.' });
    }
};
// Obtener información de un accesorio a partir de un código QR
exports.getAccessoryInfoFromQRCode = async (req, res) => {
    const { qrCodeData } = req.body;

    try {
        // Buscar el código QR en la base de datos
        const qrCode = await QRCode.findOne({ where: { data: qrCodeData } });
        if (!qrCode) {
            return res.status(404).json({ error: 'Código QR no encontrado.' });
        }

        // Obtener información del accesorio asociado al código QR
        const accessory = await Accessory.findByPk(qrCode.data.accessoryId);
        if (!accessory) {
            return res.status(404).json({ error: 'Accesorio no encontrado.' });
        }

        res.status(200).json(accessory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener información del accesorio.' });
    }
};