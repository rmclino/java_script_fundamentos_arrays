const listaDeChamada = ['JoÃ£o','Ana','Caio','Lara','Marjorie','Leo']

//listaDeChamada.splice(1,2,'Rodrigo','Maria')
var removed = listaDeChamada.splice(2,2,'Rodrigo')
console.log(`Lista de Chamada: ${listaDeChamada}`)
console.log(removed)


animaisDoAquario = ['ð', 'ð', 'ð¬', 'ð¦']

animaisDoAquario.splice(1,0,'ð ')
//animaisDoAquario.splice(3,2,'ð')

console.log(animaisDoAquario)