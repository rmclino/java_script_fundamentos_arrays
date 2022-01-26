const salaDePython = ['Melissa','Helena','Rodrigo'];
const salaDeJS = ['Ju','Leo','Raquel'];

const nova_sala1 = salaDePython.concat(salaDeJS);
const nova_sala2 = [ ...salaDePython, ...salaDeJS];
salaDePython.push(...salaDeJS);

console.log(nova_sala1 )
console.log(nova_sala2 )
console.log(salaDePython )


var arr = [4,12,3,80,0,22,56];
var max = Math.max.apply(null, arr);
console.log(max); // 80