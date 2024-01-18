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
    const SenhaCript = await criptografiaSenha.criptografiaSenha(Senha.toString())
    const query = 'SELECT * FROM Dono WHERE Email = ? AND Password = ?'
    const userLoggout = await connection.execute(query, [Email, SenhaCript])

    return userLoggout
}
module.exports = {
    createUser,
    ValidateUserEmail,
    loginUser
}