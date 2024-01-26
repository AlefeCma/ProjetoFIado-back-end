const connection = require('./connection')

const cadastroCliente = async (cliente) => {
    const { Nome, DonoId } = cliente

    const query = 'insert into Clientes(Nome , DonoId)values(?,?)'
    const novoCliente = await connection.execute(query, [Nome, DonoId])

    return novoCliente
}
const listacliente = async (id) => {
    const query = 'select * from Clientes where DonoID=?'
    const lista = await connection.execute(query,[id])
    return lista
}
module.exports = {
    cadastroCliente,
    listacliente
}