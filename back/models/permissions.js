<<<<<<< HEAD
const { DataTypes } = require('sequelize');
=======
const {DataTypes} = require('sequelize');
>>>>>>> origin/main
const sequelize  = require('../config/sequelize');

const Permission = sequelize.define('permission',{
    id_permission:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING(50),
        allowNull: false,

    },

},{
    freezeTableName:true,
});

Permission.sync()
    .then(()=>{
        console.log('Modelo de datos "permission" sincronizado correctamente.' );
    })
    .catch((err)=>{
        console.log('Error al sincornizar el modelo de datos "permissions"', err);
    });
    
module.exports =  Permission;