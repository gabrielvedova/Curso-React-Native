function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 29, min: 9 }
console.log(rand(obj))
console.log(rand({ max: 15 }))
// console.log(rand()) Não irá funcionar, tem que usar chaves por causa do destructuring
console.log(rand({}))