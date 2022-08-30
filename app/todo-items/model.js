const sequelize = require('../../database/index');

const { DataTypes } = require('sequelize');


const Todo = sequelize.define('Todo', {

  activity_group_id: {
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  priority:{
      type: DataTypes.STRING,
      defaultValue: 'very-high'
  }
});

module.exports = Todo;