const express = require('express')
const DonoController = require('../controller/DonoController')
const DonoMiddleware = require('../middleware/DonoMiddleware')
const router = express.Router()

const {verificacaoNome,verificacaoEmail} = DonoMiddleware

router.post('/cadastro',verificacaoNome,verificacaoEmail,DonoController.validacaDono)

module.exports = router