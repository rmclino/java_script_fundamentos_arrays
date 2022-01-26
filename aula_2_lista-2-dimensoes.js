// concat() é um método útil quando não se deseja alterar o array original, 
// e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push()
// ou splice() para inserir novos elementos ou fazer alterações no array original.


const lista_alunos = ['João','Juliana','Caio','Ana']
const mediaDosAlunos = [10,7,9,6.5]

let matrizNotasEAlunos = [lista_alunos, mediaDosAlunos]

console.log(matrizNotasEAlunos)

// pegar primeiro elementos
console.log(matrizNotasEAlunos[0])

console.log(`${matrizNotasEAlunos[0][0]}, sua média é ${matrizNotasEAlunos[1][0]}`)

idades = [30, 35, 28]
nomes = ["Ana", "Juliana", "Leonardo"]
faculdade = [false, true, true]

funcionarios = [nomes,idades,faculdade]

idades = [30, 35, 28]
nomes = ["Ana", "Juliana", "Leonardo"]
faculdade = [false, true, true]

funcionarios = [nomes,idades,faculdade]
console.log(funcionarios)

var arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
var arrayConcat = arrayOriginal.concat("André", "Fernanda")

console.log(arrayConcat)
console.log(arrayOriginal)

var arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
var arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat)
console.log(arrayOriginal)

var arrayOriginal = [50, 60, 70]
var arrayConcat = arrayOriginal.concat([80, [90, 100]])

console.log(arrayConcat)
console.log(arrayOriginal)