
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
const atualizarCliente = async (id, nome) => {
    const query = 'UPDATE Clientes SET Nome = ? WHERE ID = ?'
    const clienteAtualizado = connection.execute(query, [nome, id])

    return clienteAtualizado
}
const apagarCliente = async (id) => {
    try {
        const query = 'DELETE FROM Clientes WHERE ID=?'
        const clienteApagado = connection.execute(query, [id])
    } catch (erro) {
        console.log('ClienteModel erro' + erro)
    }

}


module.exports = {
    cadastroCliente,
    listacliente,
    atualizarCliente,
    apagarCliente
}
