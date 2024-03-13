const dividaModel = require('../model/DividasModel')

const criarDivida = async (req, res) => {

    const { body } = req
    const criar = await dividaModel.criarDivida(body.ClienteID, body.Valor)
    return res.status(201).json({ mensagem: 'divida criada' } + criar)
}
const atualizarDivida = async (req, res) => {
    try {
        const { body } = req
        const dividaAtualizada = await dividaModel.atualizarDivida(body.ID, body.Valor)

        return res.status(200).json({ mensagem: `atualização feita com sucesso` })
    } catch (error) {
        console.log('error dividasController')
    }

}
const apagarDivida = async (req,res) =>{
    const{body} = req 
    try {
      const dividaApagada = dividaModel.apagarDivida(body.ID)  
      return res.status(200).json({mensagem:"Divida apagada"})
     } catch (error) {
        console.log('error apagar divida controller')
     }
}


module.exports = {
    criarDivida,
    atualizarDivida,
    apagarDivida
}