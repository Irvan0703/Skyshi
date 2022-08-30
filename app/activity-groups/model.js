const sequelize = require('../../database/index');

const { DataTypes } = require('sequelize');


const Activity = sequelize.define('Activity', {

  email: {
    type: DataTypes.STRING
  },
  title: {
    type: DataTypes.STRING
  }
});

module.exports = Activity;