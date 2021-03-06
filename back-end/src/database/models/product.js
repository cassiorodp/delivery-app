const { DataTypes } = require('sequelize');
const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  price: {
    allowNull: false,
    type: DataTypes.DECIMAL(4,2)
  },
  urlImage: {
    allowNull: false,
    type: DataTypes.STRING
  }
};
module.exports = (sequelize) => {
  const Product = sequelize.define('product',
    attributes,
    {
      timestamps: false,
      tableName: 'products',
      underscored: true, 
    });

  return Product;
};