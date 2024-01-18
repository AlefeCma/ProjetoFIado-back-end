const connection = require('./connection')

const createUser = async (user) => {

    const { Nome, Password,Email } = user

    const query = 'insert into Dono(Nome,Password,Email)values(?,?,?)'

    const createdUser = await connection.execute(query, [Nome,Password,Email ])

    return createdUser
}
const ValidateUserEmail = async (Email) => {


    const query = 'SELECT * FROM Dono WHERE Email = ?';

    const userV = await connection.execute(query, [Email])
   
    return userV
}
const loginUser = async (Email,Senha)=>{

    const query = 'SELECT * FROM Dono WHERE Email = ? AND Password = ?'
    const userLoggout = await connection.execute(query,[Email,Senha])

    return userLoggout
}
module.exports = {
    createUser,
    ValidateUserEmail,
    loginUser
}