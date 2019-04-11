'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};