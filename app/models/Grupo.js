'use strict';
const models = require('../models')
module.exports = function(sequelize, Sequelize) {
    var Grupo = sequelize.define('Grupo', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        grupoNome: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        UserId:{
          type: Sequelize.INTEGER,
          references:{
            model:'Users',
            key:'id',
          }
        }
    });

    Grupo.associate = function (models) {
      models.Grupo.belongsTo(models.User,{foreignKey:'UserId',as:'moderadorId'});
  };


  return Grupo;
}
