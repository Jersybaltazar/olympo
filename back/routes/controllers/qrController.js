const qr = require("qrcode");
const QRCode = require("../../models/codeqr");
const Accesorie = require("../../models/accesorie"); // Asegúrate de importar el modelo QRCode correctamente

// Generar y asignar un nuevo código QR a un accesorio



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