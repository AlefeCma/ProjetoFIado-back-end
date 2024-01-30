const express = require('express')

const clienteController = require('../controller/ClienteController')
const clienteMiddleware = require('../middleware/ClienteMiddleware')

const router = express.Router()

router.post('/cliente/cadastro', clienteController.criarCliente)
router.post('/clientes', clienteController.listaCliente)
router.put('/cliente/atualizar',clienteMiddleware.validarNome,clienteController.atualizarCliente)
module.exports = router
