const express = require('express')

const clienteController = require('../controller/ClienteController')

const router = express.Router()

router.post('/cliente', clienteController.criarCliente)

module.exports = router 
