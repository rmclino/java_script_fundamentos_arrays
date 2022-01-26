const VERBOSE = true
const nomes_alunos = ['João','Juliana','Caio','Ana'];
const lower_nomes_alunos = nomes_alunos.map(item => item.toLowerCase());
console.log(lower_nomes_alunos);

const mediaDosAlunos = [10,7,9,6];
const printf = function(texto){
    if (VERBOSE){
        console.log(texto)
    }
}
printf("Teste")
let listaDeNotasEAlunos = [nomes_alunos, mediaDosAlunos,lower_nomes_alunos];

// includes -> booleano
// indexOf -> indice numerico
const exibeNomeNota = nomeDoAuluno => {
    // lower o nome do aluno, garante que é uma string
    nomeDoAulunoLower = nomeDoAuluno.toString().toLowerCase();
    if (VERBOSE == true) {
        console.log(nomeDoAulunoLower);
    }
    if (listaDeNotasEAlunos[2].includes(nomeDoAulunoLower)){
        // checa se estar na array
        indice = listaDeNotasEAlunos[2].indexOf(nomeDoAulunoLower);
        // retorna o indice do nome na lower
        return listaDeNotasEAlunos[0][indice] + ", sua media é " + listaDeNotasEAlunos[1][indice]
    }
    else {
        return "Aluno não esta cadastrado!"
    }
}

printf(exibeNomeNota("Juliana"));