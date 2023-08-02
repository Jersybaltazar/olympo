const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;
const qrcode = require('qrcode');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.use((req,res, next)=>{
    console.log('paso por aqui'),
    next()
})
app.get('/profile',(req, res)=>{
    res.send('profile page')
})
app.get('/accesories',(req, res)=>{
    if (req.body.q === 'lista de accesorios') {
        res.send('listando accesorios')
    }else{
        res.send('pagina normal')
    }
})
function esocger(x) {
    const numero = x.length;
    numero = 

}
app.get('/search',(req,res)=>{
    if (req.query.q === 'javascript books') {
        res.send('lista de libros de javascript')
    } else{
        res.send('pagina normal')
    }
})
//definir las rutas aqui
app.get('/generarQR', async(req,res)=>{
//logica para generar el codigo QR y almacenarlo en la base de datos
//envio de la respuesta con el codigo qr generado en el front-end
try{
    const data = 'información dinamica a incluir en el codigo qr';
    const code = await qrcode.toDataURL(data)//genera el codigo qr a partir de la información
    //aqui puedes almacenar el código QR en la base de datos junto con la información relacionada
    res.send({qrcode:code});//envia el codigoqr como respuesta al cliente

} catch(error){
    console.error('error al generar codigo qr:',error);
    res.status(500).send('error al generar codigo QR');
}
});

//ruta de prueba
app.get('/',(req,res)=>{
    res.send('¡Hola desde el servidor');
});



//iniciar el servidor

app.listen(PORT,()=>{
    console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});

//frontend basico 
//node js
//nodejs sirve en el servidor para subir archivos al hacer todo esto toma tiempo, esta misma logia una y otra vez para que abvancemos a partir de eso, la comunidad
//nodejs Express
//solo da funcionalidades y nosotrs crearemos la estructura
//app grandes desde cero tu mismo toda la funcionalidad pero escritas de manera sencilla para 

