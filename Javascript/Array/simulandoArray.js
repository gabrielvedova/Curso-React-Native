// MANO ESSE CÓDIGO DEU ERRO! COMO EU ADORO A COD3R

const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)

Object.defineProperties(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumarable: false
})

console.log(quaseArray[0]) // deu erro esse js...

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)