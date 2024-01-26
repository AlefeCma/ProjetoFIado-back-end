const connection = require('./connection')

const cadastroCliente = async (cliente) =>{
    const {Nome ,DonoId} = cliente

    const query = 'insert into Clientes(Nome , DonoId)values(?,?)'
    const novoCliente = await connection.execute(query,[Nome,DonoId])

    return novoCliente
}
module.exports = {
    cadastroCliente
}