const listaDeChamada = ['João','Ana','Caio','Lara','Marjorie','Leo']

//listaDeChamada.splice(1,2,'Rodrigo','Maria')
var removed = listaDeChamada.splice(2,2,'Rodrigo')
console.log(`Lista de Chamada: ${listaDeChamada}`)
console.log(removed)


animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
//animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)