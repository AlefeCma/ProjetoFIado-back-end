
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
const verificacaoSenha = (req,res,next) =>{

    const { body } = req

    if(body.Password === undefined){
        res.status(400).json({ mensagem: "E obrigatorio inserir um Senha" })
    }else if(body.Password == ''){
        res.status(400).json({ mensagem: "E obrigatorio inserir um Senha" })
    }else if(body.Password.lenght < 8){
        res.status(400).json({ mensagem: "Senha muito curta" })
    }
}
module.exports = {
    verificacaoNome,
    verificacaoEmail,
    verificacaoSenha
}