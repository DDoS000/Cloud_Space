const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('cloud_space', 'master', 'Cloud2_Space', {
  host: '128.199.153.21',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db