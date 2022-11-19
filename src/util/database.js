const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  'nodejs_sequelize',
  'root',
  '',
  { dialect: 'mysql', host: 'localhost', },
)

module.exports = sequelize
