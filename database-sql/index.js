const pg = require('pg');
const Sequelize = require('sequelize');
const connection = new Sequelize('productreviews', '', '', {
  host: 'localhost',
  dialect: 'postgres',
  operatorAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})

connection
  .authenticate()
  .then(() => {
    
    console.log('connected')
  })
  .catch(err =>{
    console.log('unable to connect to the postgres database', err);
  });
  module.exports = connection;