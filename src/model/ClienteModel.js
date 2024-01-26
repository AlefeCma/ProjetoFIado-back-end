const connection = require('./connection')

const cadastroCliente = async (cliente) => {
    const { Nome, DonoId } = cliente

    const query = 'insert into Clientes(Nome , DonoId)values(?,?)'
    const novoCliente = await connection.execute(query, [Nome, DonoId])

    return novoCliente
}
const listacliente = async () => {
    const query = 'select * from Cliente'
    const lista = connection.execute(query)
    return lista
}
module.exports = {
    cadastroCliente
}