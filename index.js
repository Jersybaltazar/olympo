const QRCode = require('qrcode-generator');
const fs = require('fs');

const accessories = [
  { id: 1, name: 'Licuadora', maintenanceDate: '2023-07-24' },
  { id: 2, name: 'Cocina', maintenanceDate: '2023-07-26' },
  // Agrega más accesorios aquí
];

function generateQRCode(accessory) {
  const qr = QRCode(0, 'L');
  qr.addData(JSON.stringify(accessory));
  qr.make();
  return qr.createDataURL(10);
}

function generateAllQRCodes() {
  accessories.forEach((accessory) => {
    const qrCodeData = generateQRCode(accessory);
    fs.writeFileSync(`QR_${accessory.id}.png`, qrCodeData.split(',')[1], 'base64');
  });
}

generateAllQRCodes();
