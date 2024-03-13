const express = require('express')

const dividaController = require('../controller/DividasController')

const router = express.Router()

router.post('/criar/divida', dividaController.criarDivida)
router.put('/divida', dividaController.atualizarDivida)
router.delete('/divida', dividaController.apagarDivida)
module.exports = router