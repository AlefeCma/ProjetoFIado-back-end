const connection = require('./connection')

const criarDivida = async (ClienteID, Valor) => {
    const Data = new Date().toISOString().slice(0, 10);
    const query = 'INSERT INTO Dividas (ClienteID, Valor, Data) VALUES (?, ?, ?)';
    const divida = await connection.execute(query, [ClienteID, Valor, Data]);
    return divida
}
const atualizarDivida = async (ID, Valor) => {
    try {
        const Data = new Date().toISOString().slice(0, 10);
        const query = 'UPDATE Dividas SET Valor = ?, Data = ? WHERE ID = ?  ';
        const DividaAtualizada = await connection.execute(query, [Valor, Data, ID])
        return DividaAtualizada
    } catch (error) {
        console.log('erro dividaModel')
    }


}
const apagarDivida = async (ID) => {
    try {
        const query = 'DELETE FROM Dividas WHERE ID=?'
        const dividaApagada = await connection.execute(query, [ID])
    } catch (error) {
        console.log('erro dividaModel apagarDivida')
    }
}
module.exports = {
    criarDivida,
    atualizarDivida,
    apagarDivida
}
