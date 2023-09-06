const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/meubanco", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
    nome: String,
    email: String,
    senha: String
});

const User = mongoose.model('User', userSchema);

async function criarUsuario(nome, email, senha) {
    try {
        const usuario = new User({
            nome: nome,
            email: email,
            senha: senha
        });
        const novoUsuario = await usuario.save();
        console.log('Novo usuário criado:', novoUsuario);
    } catch (error) {
        console.error('Erro ao criar o usuário:', error);
    }
}


