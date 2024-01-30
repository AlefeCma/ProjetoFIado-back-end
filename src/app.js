const express = require('express')
const routerDono = require('./router/UserRouter')
const routerCliente = require('./router/ClienteRouter')
const routerDivida = require('./router/DividaRouter')

const app = express()

app.use(express.json())

app.use(routerDono)
app.use(routerCliente)
app.use(routerDivida)



module.exports = app