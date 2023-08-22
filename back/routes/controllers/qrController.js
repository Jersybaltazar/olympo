const qr = require("qrcode");
const QRCode = require("../../models/codeqr");
const Accesorie = require("../../models/accesorie"); // Asegúrate de importar el modelo QRCode correctamente

// Generar y asignar un nuevo código QR a un accesorio

exports.saveCodeQR = async (req, res) => {
  try {
    // Generar un valor único para el código QR (puede ser un número, cadena, etc.)
    const uniqueValue = generateUniqueValue(); // Implementa esta función
    const qrCodeImage = await QRCode.toDataURL(uniqueValue);
    // Guardar el valor único en la tabla CodeQR
    const newCodeQR = await CodeQR.create({ code: uniqueValue });

    return newCodeQR.id_qr; // Devolver el ID del código QR creado
  } catch (error) {
    console.error("Error al crear el código QR:", error);
    return null;
  }
};

exports.saveEncryptedCode = async (req, res) => {
  try {
    // Verificar que la solicitud tenga un cuerpo y sea de tipo JSON
    if (!req.body || typeof req.body !== 'object') {
        return res.status(400).json({ message: 'Cuerpo de solicitud inválido' });
    }


    // Verificar que el objeto JSON tenga la propiedad 'code'
    if (!req.body.code) {
        return res.status(400).json({ message: 'La propiedad "code" es requerida en el cuerpo de la solicitud' });
      }

    const {code}   = req.body; // Obtén el valor del código QR del cuerpo de la solicitud
    // Genera la imagen del código QR

    const createdQR = await QRCode.create({
        code,      
    });

    res.status(201).json({
      message: "Código QR guardado exitosamente.",
      id_qr: createdQR.id_qr,
    });
  } catch (error) {
    console.error("Error al guardar el código QR:", error);
    res.status(500).json({ message: "Error al guardar el código QRs." });
  }
};

exports.generateAndAssignQRCode = async (req, res) => {
  try {
    const { accessoryId } = req.params;

    // Buscar el accesorio por su ID
    const accessory = await Accesorie.findByPk(accessoryId);
    if (!accessory) {
      return res.status(404).json({ error: "Accesorio no encontrado." });
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
    accessory.code_QR = newQRCode.id_qr;
    await accessory.save();

    res.status(201).json(newQRCode);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al generar y asignar el código QR." });
  }
};

// Obtener todos los códigos QR
exports.getAllQRCodes = async (req, res) => {
  try {
    const qrCodes = await QRCode.findAll();
    res.status(200).json(qrCodes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los códigos QR." });
  }
};

// Obtener un código QR por su ID
exports.getQRCodeById = async (req, res) => {
  const { id } = req.params;
  try {
    const qrCode = await QRCode.findByPk(id);
    if (!qrCode) {
      return res.status(404).json({ error: "Código QR no encontrado." });
    }
    res.status(200).json(qrCode);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el código QR." });
  }
};
// Obtener información de un accesorio a partir de un código QR
exports.getAccessoryInfoFromQRCode = async (req, res) => {
  const { qrCodeData } = req.body;

  try {
    // Buscar el código QR en la base de datos
    const qrCode = await QRCode.findOne({ where: { data: qrCodeData } });
    if (!qrCode) {
      return res.status(404).json({ error: "Código QR no encontrado." });
    }

    // Obtener información del accesorio asociado al código QR
    const accessory = await Accessory.findByPk(qrCode.data.accessoryId);
    if (!accessory) {
      return res.status(404).json({ error: "Accesorio no encontrado." });
    }

    res.status(200).json(accessory);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al obtener información del accesorio." });
  }
};
