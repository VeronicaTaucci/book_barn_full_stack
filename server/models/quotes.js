'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quotes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.quotes.belongsTo(models.books, { foreignKey: 'book_id' })
    }
  }
  quotes.init({
    quote_body: DataTypes.STRING,
    book_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'quotes',
  });
  return quotes;
};