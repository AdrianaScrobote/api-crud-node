const seq = require('sequelize')
require('mysql2')

// BD
const banco_dados = new seq('bd_api', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

// Exports
module.exports = {
  seq: seq,
  banco_dados: banco_dados
}