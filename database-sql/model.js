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
  
  productId: {
    type: Sequelize.INTEGER,
    referencesKey: 'productId'
  },
  username:{
    type: Sequelize.TEXT
  },
  header:{
    type: Sequelize.TEXT
  },
  text:{
    type: Sequelize.TEXT
  },
  date:{
    type:Sequelize.TEXT
  },
  starRating:{
    type: Sequelize.TEXT
  },
  size:{
    type: Sequelize.INTEGER
  },
  width: {
    type: Sequelize.INTEGER
  },
  comfort: {
    type: Sequelize.INTEGER
  },
  quality: {
    type: Sequelize.INTEGER
  },
  recommended: {
    type: Sequelize.BOOLEAN()
  },
  yes: {
    type: Sequelize.INTEGER
  },
  no: {
    type: Sequelize.INTEGER
  },
}, {
  timestamps: false
}

);

// Product.hasMany(Reviews, {
//   foreignKey: 'reviewsId'
// });
// Reviews.belongsTo(Product, {
//   foreignKey: 'reviewsId'
// }); //adds id to product

connection.sync({force:false});

module.exports.Product= Product;
module.exports.Reviews= Reviews;