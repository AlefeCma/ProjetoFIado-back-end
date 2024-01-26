const express = require('express')

const clienteController = require('../controller/ClienteController')

const router = express.Router()

router.post('/cliente/cadastro', clienteController.criarCliente)
router.post('/clientes',clienteController.listaCliente)

module.exports = router 
