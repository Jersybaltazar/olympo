const {Sequelize}  = require('sequelize');

const sequelize = new Sequelize('olympo','root','rootleon',{
    host: 'localhost',
    dialect:'mysql',    
});

module.exports =sequelize;
