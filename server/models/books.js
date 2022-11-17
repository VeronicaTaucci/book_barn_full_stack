'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.books.hasMany(models.quotes, { foreignKey: 'book_id' })
    }
  }
  books.init({
    book_name: DataTypes.STRING,
    book_author: DataTypes.STRING,
    book_description: DataTypes.STRING,
    raiting: DataTypes.INTEGER,
    pages_read: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'books',
  });
  return books;
};