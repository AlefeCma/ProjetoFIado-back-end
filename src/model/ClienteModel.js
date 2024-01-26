
const connection = require('./connection')

// Define uma função assíncrona para cadastrar um novo cliente
const cadastroCliente = async (cliente) => {
    const { Nome, DonoId } = cliente

    const query = 'insert into Clientes(Nome , DonoId)values(?,?)'
    const novoCliente = await connection.execute(query, [Nome, DonoId])

    return novoCliente
}
// Define uma função assíncrona para listar os clientes de um determinado dono
const listacliente = async (id) => {
    const query = 'select * from Clientes where DonoID=?'
    const lista = await connection.execute(query, [id])

    return lista
}


module.exports = {
    cadastroCliente,
    listacliente
}
