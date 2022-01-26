//medias 10, 6.5, 8,7.5

const notas = [10, 6.5, 8, 7.5, "8"];
const notas2 = [7,7]
const notas_all = notas.concat(notas2)
console.log(notas_all)
let string_media = `Media das Notas ${media_array(notas)}`;

// let nota1 = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;

//notas.push(9)

let media = ( notas[0] + notas[1] + notas[2] + notas[3] ) / notas.length;
let soma = 0;

for(let i=0; i < notas.length; i++){
    soma += notas[i];
}
let media2 = soma / notas.length;

console.log(notas.length);
console.log(media);
console.log(media2);


function soma_array(array_dados) {
    // Soma os itens da Arrya
    let soma = 0;
    for(let i=0; i < array_dados.length; i++){
        if(typeof(array_dados[i]) == 'number') soma += array_dados[i];
    }
    return soma
}
function media_array(array_dados){
    let soma = soma_array(array_dados)
    return soma / array_dados.length
}

console.log( "Soma das Notas " + soma_array(notas))
console.log(string_media)

function print_array(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
notas.forEach(print_array)

console.log(typeof(notas))
console.log(typeof(notas.length))
console.log(typeof(notas[4]))
console.log(notas.at(-1))
// Mais sobre Arrays
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

// at(index)
//  retorna valor com base em index positivo ou negativo

// concat()
//  unta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
//  Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.

// filter()
//  Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
//  Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.

// find()
//  Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.

// findIndex()
//  Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.

// indexOf()
//  Localiza e retorna o índice referente à primeira ocorrência de determinado valor em um array. Caso não exista nenhuma ocorrência do valor, retorna -1.

// lastIndexOf()
//  Funciona da mesma forma que o indexOf(), porém retorna o índice referente à última ocorrência de um valor em um array, varrendo o array de trás para frente.

// forEach()
//  Executa uma função em cada elemento do array de forma individual.
//  Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.

// pop()
//  Retira o último elemento do array.
//  Altera o array original removendo o elemento.


// shift()
//  Retira o primeiro elemento do array.
//  Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.

// push()
//  Adiciona o elemento passado como parâmetro do array, porém na última posição.
//  Altera o array original com o novo valor.

// unshift()
//  Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
//  Altera o array original com o novo valor.

// reduce()
//  Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.

// reduceRight()
//  Funciona igual o reduce() porém começa do final do array e segue até o início.

// reverse()
//  Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.

// slice()
//  Copia uma parte do array para outro array.

// sort()
//  Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.

// splice()
//  Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.