const connection = require('./connection')

const criarDivida = async (ClienteID, Valor) => {
    const Data = new Date().toISOString().slice(0, 10);
    const query = 'INSERT INTO Dividas (ClienteID, Valor, Data) VALUES (?, ?, ?)';
    const divida = await connection.execute(query, [ClienteID, Valor, Data]);
    return divida
}
const atualizarDivida = async (Id,Valor) => {

    const Data = new Date().toISOString().slice(0, 10);
    const query = 'UPDATE Dividas SET Valor = ? WHERE ID = ? AND Data = ?';
    const DividaAtualizada = await connection.execute(query,[Id,Valor,Data])
    return DividaAtualizada[0]

}

module.exports= {
    criarDivida,
    atualizarDivida
}
