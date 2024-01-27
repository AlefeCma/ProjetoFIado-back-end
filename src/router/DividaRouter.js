const express = require('express')

const dividaController = require('../controller/DividasController')

const router = express.Router()

router.post('/criar/divida', dividaController.criarDivida)


module.exports = {
    router
}