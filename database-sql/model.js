const Sequelize = require('sequelize');
const connection = require('./index.js');

const Product = connection.define(
'products',
{
  productId:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique:true
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
  {timestamps:false}
  
);
const Reviews = connection.define(
'reviews',
{
  reviewsId:{
  type: Sequelize.INTEGER, 
  autoIncrement: true,
  primaryKey: true
  },
  productId: {
    type: Sequelize.INTEGER(),
    referencesKey: 'productId'
  },
  username:{
    type: Sequelize.STRING(64)
  },
  header:{
    type: Sequelize.STRING(64)
  },
  text:{
    type: Sequelize.STRING(150)
  },
  date:{
    type:Sequelize.STRING(30)
  },
  starRating:{
    type: Sequelize.STRING(30)
  },
  size:{
    type: Sequelize.INTEGER()
  },
  width: {
    type: Sequelize.INTEGER()
  },
  comfort: {
    type: Sequelize.INTEGER()
  },
  quality: {
    type: Sequelize.INTEGER()
  },
  recommended: {
    type: Sequelize.BOOLEAN()
  },
  yes: {
    type: Sequelize.INTEGER()
  },
  no: {
    type: Sequelize.INTEGER()
  }
})

Product.hasMany(Reviews, {
  foreignKey: 'reviewId'
});
Reviews.belongsTo(Product, {
  foreignKey: 'reviewsId'
}); //adds id to product

connection.sync({force:false});

module.exports.Product= Product;
module.exports.Reviews= Reviews;