const express = require('express')
const DonoController = require('../controller/DonoController')
const router = express.Router()

router.post('/cadastro', DonoController.validacaDono)

module.exports = router