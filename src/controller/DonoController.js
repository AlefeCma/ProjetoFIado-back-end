const DonoModel = require('../model/DonoModel')

const validacaDono = async (req, res) => {

    const { body } = req

    const user = await DonoModel.ValidateUserEmail(body.Email)

    if (Object.keys(user[0]).length === 0) {
        const newUser = await DonoModel.createUser(body)
        return res.status(201).json({ message: 'User created' })
    } else {
        return res.status(200).json({ massage: "Novo Dono não foi criado" })
    }
}

const loginDono = async (req, res) => {
    const { body } = req

    try {
        const user = await DonoModel.loginUser(body.Email, body.Password)

        if (user === true) {
            res.status(200).json({ mensagem: "Usuario logado" })

        } else {
            res.status(404).json({ mensagem: "Usuario não encontrado" })
        }
    } catch (error) {
        console.log('error no login DonoController' + error)
    }

}

const atualizarNome = async (req, res) => {
    const { body } = req

    try {
        const novoDono = await DonoModel.atualizarNome(body.Nome, body.ID)
        return res.status(200).json({ mensagem: 'atualizado com sucesso' })
    } catch (error) {
        console.log('Problema DonoController' + error)
    }

}

module.exports = {
    validacaDono,
    loginDono,
    atualizarNome
}