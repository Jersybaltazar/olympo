const {DataTypes} = require('mysql2');
const sequelize  = require('../config/sequelize');

const Permission = sequelize.define('permissions',{
    id_permission:{
        tyoe:DataTypes.INTEGER,
        primarykey: true,
        autoIncrement:true,
    },
    name:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },

});

Permission.sync()
    .then(()=>{
        console.log('Modelo de datos "permissions" sincronizado correctamente.' );
    })
    .catch((err)=>{
        console.log('Error al sincornizar el modelo de datos "permissions"', err);
    });
    
module.exports =  Permission;