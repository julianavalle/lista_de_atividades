'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atividade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Atividade.init({
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    concluido: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    data_criacao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    data_conclusao: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Atividade',
  });
  return Atividade;
};