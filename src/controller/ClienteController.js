const clienteModel = require('../model/ClienteModel')
const donoModel = require('../model/DonoModel')

const criarCliente = async (req, res) => {
    const { body } = req
    try {
        const id = await donoModel.validacaoId(body.DonoId)

        if (Object.keys(id[0]).length === 0) {
            return res.status(404).json({ mensagem: 'id do dono não encontrado' })
        } else {
            clienteModel.cadastroCliente(body)
            return res.status(201).json({ mensagem: 'novo cliente cadastrado' })
        }
    } catch (error) {
        console.log('erro no controller' + error)
    }

}
const listaCliente = async (req, res) => {
    const { body } = req
    const lista = await clienteModel.listacliente(body.DonoID)
    return res.status(200).json(lista[0])
}
const atualizarCliente = async (req, res) => {
    const { body } = req

    const atualizarCliente = clienteModel.atualizarCliente(body.ID, body.Nome)
    return res.status(200).json({ mensagem: 'Cliente atualizado' })
}
cosnt apagarCliente = async
module.exports = {
    criarCliente,
    listaCliente,
    atualizarCliente
}