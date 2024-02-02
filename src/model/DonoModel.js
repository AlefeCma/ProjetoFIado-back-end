const connection = require('./connection')
const criptografiaSenha = require('../utils/criptografiaSenha')

const createUser = async (user) => {

    const { Nome, Password, Email } = user

    const SenhaCript = await criptografiaSenha.criptografiaSenha(Password.toString())

    const query = 'insert into Dono(Nome,Password,Email)values(?,?,?)'

    const createdUser = await connection.execute(query, [Nome, SenhaCript, Email])

    return createdUser
}
const ValidateUserEmail = async (Email) => {


    const query = 'SELECT * FROM Dono WHERE Email = ?';

    const userV = await connection.execute(query, [Email])

    return userV
}
const loginUser = async (Email, Senha) => {

    const query = 'SELECT * FROM Dono WHERE Email = ?';
    const users = await connection.execute(query, [Email]);

    const user = users[0];


    const SenhaVerificada = await criptografiaSenha.verificarSenha(Senha.toString(), user[0].Password);


    return SenhaVerificada;
}
const validacaoId = async (id)=>{
    const query = 'select * from Dono where(Id)=?'
    const donoid = await connection.execute(query,[id])
    return donoid
}
const atualizarNome = async (Nome,id) => {

    const query = 'UPDATE Dono SET Nome = ? WHERE ID = ?'
    const nomeAtualizado = connection.execute(query,[Nome,id])

}

module.exports = {
    createUser,
    ValidateUserEmail,
    loginUser,
    validacaoId
}