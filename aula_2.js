// dividindo arrays
const nomes_alunos = ['João','Juliana','Ana','Caio','Lara','Marjorie',
                      'Guilherme','Aline','Fabiana','Andre','Carlos',
                      'Paulo','Bia','Vivian','ISabela','Vinicius',
                      'Renan','Renata', 'Daisy','Camilo','Jesus'];
// inicio e fim
const sala1 = nomes_alunos.slice(0,nomes_alunos.length/2);
const sala2 = nomes_alunos.slice(nomes_alunos.length/2);
console.log(nomes_alunos.length/2)
console.log(`Alunos da Sala1: ${sala1}`);
console.log(`Alunos da Sala1: ${sala2}`);