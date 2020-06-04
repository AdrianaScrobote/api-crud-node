// Includes
const bd = require('./bd')

const tb_pessoa = bd.banco_dados.define('pessoa', {
  nome:  { type: bd.seq.STRING(50), allowNull: false },
  email: { type: bd.seq.STRING(70), allowNull: false }
}, { underscored: true, timestamps: false, freezeTableName: true })

// Exports
module.exports = tb_pessoa