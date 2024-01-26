const express = require('express')

const clienteController = require('../controller/ClienteController')
const clienteMiddleware = require('../middleware/ClienteMiddleware')

const router = express.Router()

router.post('/cliente/cadastro',clienteMiddleware.validarNome, clienteController.criarCliente)
router.post('/clientes',clienteController.listaCliente)

module.exports = router 
