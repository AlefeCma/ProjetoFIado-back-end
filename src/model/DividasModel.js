const connection = require('./connection')

const criarDivida = async (ClienteID, Valor) => {
    const Data = new Date().toISOString().slice(0, 10);
    const query = 'INSERT INTO Dividas (ClienteID, Valor, Data) VALUES (?, ?, ?)';
    const divida = await connection.execute(query, [ClienteID, Valor, Data]);
    return divida
}

module.exports= {
    criarDivida
}
