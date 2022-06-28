const pessoa = {  /* Literal de objeto: */
    nome: "Anna Julia",
    idade: 18
};

console.table(pessoa); 
console.log(pessoa.nome,pessoa.idade);
console.log(pessoa["nome"], pessoa["idade"]);

pessoa.altura = 1.82,
pessoa ["massa"] = 84,3;
console.table(pessoa);

// pessoa = { 
//    nada: "nada";
//}