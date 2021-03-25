'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Medicine.belongsToMany(models.Patient, {through: "PatientMedicine"})
    }
  };
  Medicine.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Please fill in the Medicine name"
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        errors(value) {
          let fatal = false
          if (!value) {
            fatal = "Please fill in the Medicine stock"
          } else if (value <= 0) {
            fatal = "Medicine stock should be greater than 0"
          }
          if (fatal) {
            throw new Error (fatal)
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Medicine',
  });
  return Medicine;
};