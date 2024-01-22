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
console.log(Senha)
    const query = 'SELECT * FROM Dono WHERE Email = ?';
    const users = await connection.execute(query, [Email]);

    console.log(users[0])
    const user = users[0];

    console.log(user)
    console.log(user.Password)
    const SenhaVerificada = await criptografiaSenha.verificarSenha(Senha.toString(), user[0].Password);
    
    console.log(SenhaVerificada);
    return SenhaVerificada;
}

module.exports = {
    createUser,
    ValidateUserEmail,
    loginUser
}