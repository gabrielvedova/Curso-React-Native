
// 1° forma
let dobro = function (a) {
    return 2 * a
}

// 2° forma
dobro = (a) => {
    return 2 * a
}

// 3° forma(return implícito)
dobro = a => 2 * a
console.log(dobro(Math.PI))


let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'