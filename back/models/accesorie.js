const {DataTypes} = require('sequelize');
<<<<<<< HEAD
const sequelize  = require('../config/sequelize'); //Asegurate de importar el correcto archivo
=======
const sequelize  = require('../config/sequelize'); 
>>>>>>> origin/main
const CodeQR = require('./codeqr');


const Accesorie = sequelize.define('accesorie',{
    id_accesorie:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    brand:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    model:{
        type:DataTypes.STRING(100),
        allowNull: false,
    },
    price:{
        type: DataTypes.STRING(100),
        allowNull:false,
    },
    parts:{
        type: DataTypes.STRING(100),
        allowNull:false,
    },
    induction:{
        type:DataTypes.STRING(100),
        allowNull:  false,
    },
    mantenimiento: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
    img: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    purchase_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    code_QR: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'codeqr',
<<<<<<< HEAD
            key:'id_qr'
        }
=======
            key:'id_qr',
        },
>>>>>>> origin/main
    },
},{
    freezeTableName:true,
});
//sincronizar al modelo de la base de datos(crear la tabla si no existe)

Accesorie.sync()
    .then(()=>{
        console.log('Modelo de datos "accesories" sincronizado correctamente.');

    })
    .catch((err)=>{
        console.log('Error al sincronizar el modeloe de datos "accesories"', err);
    });
    
    module.exports  = Accesorie;