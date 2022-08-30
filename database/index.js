const {Sequelize }= require('sequelize');
const { dbHost,dbPass,dbUser,dbPort,dbName } = require('../app/config');

const sequelize = new Sequelize ({
    database: `${dbName}`,
    username: `${dbUser}`,
    password: `${dbPass}`,
    host: `${dbHost}`,
    port: `${dbPort}`,
    charset: 'utf8mb4',
    dialect:'mysql'
  });

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}) ();

module.exports = sequelize;