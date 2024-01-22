const bcrypt = require('bcryptjs');


const criptografiaSenha = async (senha) => {
    try {
        const SenhaCript = await bcrypt.hash(senha,10);
        return SenhaCript;
        
    } catch {
        console.log('error crpito');
    }    
}

const verificarSenha = async (senha, hash) => {
    try {
        const resultado = await bcrypt.compare(senha, hash);
        return resultado;
    } catch {
        console.log('Erro ao verificar a senha');
    }
}

module.exports = {
    criptografiaSenha,
    verificarSenha
};
