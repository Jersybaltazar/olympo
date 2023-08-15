const {DataTypes} = require('sequelize');
const sequelize  = require('../config/sequelize');
const Permission = require('./permissions');

const User = sequelize.define('user',{

    id_users:{ 
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING(200),
        allowNull:false,

    },
    lastName:{
        type:DataTypes.STRING(200),
        allowNull:false,
    },
    permission:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'permission',
            key: 'id_permission',
        },  
    },
    email:{
        type : DataTypes.TEXT(),
        unique: true,
        allowNull: false,
    },
    password:{
        type:DataTypes.CHAR(64),
        allowNull: false,
        
    }

},{
    freezeTableName:true,
    timestamps: false,
});
User.sync()
    .then(()=>{
        console.log('Modelo de datos "users" sincronizado correctamente.');
    })
    .catch((err)=>{
        console.error('Error al sincronizar el modelo de datos "users":', err);
    }); 

 module.exports = User;