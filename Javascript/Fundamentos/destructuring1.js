const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Chaves depois do const significa que é um desestrurador
const { nome, idade } = pessoa
console.log(nome, idade)