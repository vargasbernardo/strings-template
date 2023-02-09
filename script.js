// pratica guiada 1 e 2
// function corFavoritaConcat(nome, cor, citacao) {
    
//     const frase = 'O usuario se chama: ' + nome + ' e sua cor favorita eh: ' + cor + ', alem disso, sua citacao favorita eh: "' + citacao + '".'

//     console.log(frase)
// }
// const nomeUsuario = prompt('Qual seu nome?')
// const corFavorita = prompt('Qual sua cor favorita?')
// const citacaoFavorita = prompt('Qual a sua citacao favorita?')

// corFavoritaConcat(nomeUsuario, corFavorita, citacaoFavorita)

// // versao template strings
// function corFavoritaTemplateStrings(nome, cor, citacao) {
//     const nomeMaiusculo = nome.toUpperCase()
//     const frase = `
//     Nome: ${nomeMaiusculo}
//     Cor Favorita: ${cor}
//     Citacao Predileta: "${citacao}"`

//     console.log(frase)
//     console.log(nome.length)
//     console.log(nome.includes('a' || 'A'))
// }

// corFavoritaTemplateStrings(nomeUsuario, corFavorita, citacaoFavorita)
// Exercicio de fixacao
const nomeDoUsuario = prompt('Digite seu nome: ')
const emailDoUsuario = prompt('Digite seu e-mail: ')
const verificar = emailDoUsuario.includes('@')

function mensagemBoasVindas(nome, email) {

    const tamanhoDoNome = nomeDoUsuario.length
    const frase = `O e-mail ${email} foi cadastrado com sucesso. Boas vindas ${nome}! Seu nome tem ${tamanhoDoNome} caracteres!`
    const substituir = frase.replaceAll('r', 'x').replaceAll('R', 'X')
    

    console.log(frase)
    console.log(substituir)
}

mensagemBoasVindas(nomeDoUsuario, emailDoUsuario)
console.log(verificar)