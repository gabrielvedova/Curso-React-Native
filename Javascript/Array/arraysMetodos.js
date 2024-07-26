const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ÚLTIMO elemento da lista
console.log(pilotos)

pilotos.push('Verstappen') // add elemento na lista no ÚLTIMO índice
console.log(pilotos)

pilotos.shift() // Remove o PRIMEIRO elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // add elemento na lista no PRIMEIRO índice
console.log(pilotos)

// SPLICE pode tanto add quanto remover elementos

// ADD
// 2-> add a partir do índice 2; 0-> remover ninguém; depois desses números, coloque o que deseja add
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// REMOVER
// 3-> add a partir do índice 2; 1-> remover tantos elementos
pilotos.splice(3, 1)
console.log(pilotos)


// SLICE

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array entre o índice 1 e 4, mas n inclui o 4
console.log(algunsPilotos2)