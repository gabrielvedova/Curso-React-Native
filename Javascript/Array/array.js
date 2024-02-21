console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Tereteuteu')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Tereteuteu']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Pauno'
aprovados.push('Queijo')
console.log(aprovados)

aprovados[9] = 'Tafarel'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[3]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Tereteuteu']
aprovados.splice(1, 2, 'Tafarel', 'Thomas Turbando')
console.log(aprovados)