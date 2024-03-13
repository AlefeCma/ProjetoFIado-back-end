const dividaModel = require('../model/DividasModel')

const criarDivida = async (req,res) =>{

    const{body}= req
    const criar = await dividaModel.criarDivida(body.ClienteID,body.Valor)
    return res.status(201).json({mensagem:'divida criada'} + criar)
}
const atualizarDivida = async (req,res) => {
    const {body} = req
    const dividaAtualizada = await dividaModel.atualizarDivida(body)
    
    return res.status(200).json({mensagem:`atualização feita com sucesso`})
}


module.exports = {
    criarDivida
}