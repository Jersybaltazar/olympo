const {Sequelize}  = require('sequelize');

const sequelize = new Sequelize('olympo','root','jersy',{
    host: 'localhost',
    dialect:'mysql',    
});

module.exports =sequelize;
