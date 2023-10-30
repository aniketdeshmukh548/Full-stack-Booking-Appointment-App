const Sequelize = require('sequelize');

const sequelize = new Sequelize('bookingapp', 'root', 'Aniket@548', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;