import React,{useState} from "react";

const App =() =>{
  const [qrcode, setQrcode] = useState('');
  
  const generateQRCode = async() => {
  try {
    const response = await fetch('/generarQR');
    const data = await response.json();
    setQrcode (data.qrcode);
  } catch (error) {
    console.error('error al generar condigo QR', error);    
  }
    
  };
  return(
    <div>
      <h1>
        GENERAR CODIGO QR aqui    
      </h1>
      
      <button onClick={generateQRCode}>
        Generar codigo QR 

        

      </button>
      {qrcode && <img src={qrcode} alt="Codigo QR genreado"/>}
    </div>
  );


};

export default App;