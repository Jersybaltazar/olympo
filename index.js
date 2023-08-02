const QRCode = require('qrcode-generator');
const fs = require('fs');

const accessories = [
  { id:1, name: 'Licuadora', maintenanceDate: '2023-07-24' },
  { id:2, name: 'Cocina', maintenanceDate: '2023-07-26' },
  { id:3, name: 'refrigeradora', maintenanceDate:'2023-08-28'},
  {id:4, name : ''},
  {id:5, name:'estante', maintenanceDate:'2023-08-28'},
  // Agrega más accesorios aquí
];
// function generarcodigoQR(accesorio){
//   const qr = QRCode(0,'M');
//   qr.addData(JSON.stringify(accesorio));
//   qr.make();
//   return qr.createDataURL(1);

// }

// function generartodosloscodigosQR(){
//   accessories.forEach((accesorio)=>{
//     const qrCodeData = generarcodigoQR(accesorio);
//     fs.writeFileSync(`QR_${accesorio.id}.png`,qrCodeData.split(',')[1],'base64');
//   });
// }
// generartodosloscodigosQR()

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

function transformateQR(){
  accessories.forEach((JSON.stringify(Date)))
  const qrcodedata = generateQRCode(accessoriesc);
  fs.accessSync(({
    
  }))
}

generateAllQRCodes();
