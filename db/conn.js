require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
);

try {
  sequelize.authenticate();
  console.log('Conectamos com o Sequelize!');
} catch (error) {
  console.error('Não foi possível conectar:', error);
}

module.exports = sequelize;
