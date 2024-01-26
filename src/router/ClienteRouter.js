const express = require('express')

const clienteController = require('../controller/ClienteController')

const router = express.Router()

router.post('/cliente/cadastro', clienteController.criarCliente)
router.get('/clientes',clienteController.listaCliente)

module.exports = router 
