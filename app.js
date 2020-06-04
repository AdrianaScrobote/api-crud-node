// Includes
// Bibliotecas
const express = require('express')
const app = require('express')()
app.use(express.json())

// adicionar pasta public estaticamente para o node carregar os arquivos js e css corretamente para o client-side
app.use(express.static(__dirname + '/public'));


// Funcionalidades do sistema CRUD
const func_crud = require('./func_crud')
func_crud(app)


// main
const porta = 1235;
app.listen(porta, function() {
  console.log('CRUD NODE\nServidor rodando na porta %s...', porta);
})