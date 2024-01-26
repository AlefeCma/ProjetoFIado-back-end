const validarNome = (req,res,next)=>{
    const {body} = req
    
    if(body.Nome=== undefined){
        res.status(200).json({mensagem:'Campo Nome deve ser preenchido'})
    }else if(body.Nome=== ''){
        res.status(200).json({mensagem:'Campo Nome deve ser preenchido'})
    }
}
module.exports = {
    validarNome
}