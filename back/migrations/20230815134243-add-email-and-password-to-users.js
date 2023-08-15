'use strict';

const { DataTypes } = require('../config/sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize)=>{
    await queryInterface.addColumn('user','email',{
      type:Sequelize.STRING(100),
      allowNull: false,
      unique:true
    }),
  

  await queryInterface.addColumn('user','password',{
      type: Sequelize.CHAR(64),
      allowNull: false
  }); 
},
down:async(queryInterface, Sequelize)=>{
  await queryInterface.removeColumn('user','email');
  await queryInterface.removeColumn('user','password');  
}
};