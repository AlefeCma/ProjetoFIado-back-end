const dividaModel = require('../model/DividasModel')

const criarDivida = async (req,res) =>{
    const{body}= req
    
    const criar = dividaModel.criarDivida(body.ClienteID,body.Valor)

    return res.status(201).json({mensagem:'divida criada'} + criar)
}

module.exports = {
    criarDivida
}