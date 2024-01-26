const express = require('express')
const routerDono = require('./router/UserRouter')
const routerCliente = require('./router/ClienteRouter')
const app = express()

app.use(express.json())
app.use(routerDono)
app.use(routerCliente)



module.exports = app