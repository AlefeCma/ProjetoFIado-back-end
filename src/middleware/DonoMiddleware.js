
const verificacaoNome = (req, res, next) => {
    const { body } = req  
    if (body.Nome === undefined) {
        res.status(400).json({ mensagem: "E obrigatorio inserir um nome" })
    } else if (body.Nome === '') {
        res.status(400).json({ mensagem: "E obrigatorio inserir um nome" })
    }
    next()
}
const verificacaoEmail = (req, res, next) => {
    const { body } = req

    if (body.Email === undefined) {
        res.status(400).json({ mensagem: "E obrigatorio inserir um Email" })
    } else if (body.Email == '') {
        res.status(400).json({ mensagem: "E obrigatorio inserir um Email" })
    }
    next()
}
module.exports = {
    verificacaoNome,
    verificacaoEmail
}