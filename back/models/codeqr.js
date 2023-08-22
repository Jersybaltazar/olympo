const { DataTypes }  = require('sequelize');
const sequelize  = require('../config/sequelize');

const CodeQR = sequelize.define('codeqr',{
    id_qr:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    code:{
        type: DataTypes.TEXT,
        allowNull:false,
    },
    

},{
    freezeTableName: true,
    timestamps: false,
});

CodeQR.sync()
    .then(()=>{
        console.log('Modelo de datos "codeqr" sincronizado correctamente.' );
    })
    .catch((err)=>{
        console.log('Error al sincornizar el modelo de datos "codeqr"', err);
    });
    
module.exports =  CodeQR;