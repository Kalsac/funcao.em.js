// Função 1: apresentarAluno
function apresentarAluno() {
  let nome = "Isaac"; 
  let turma = "do 3° tecnico"; 
  console.log(`Meu nome é ${nome} e estou na turma ${turma}.`);
}


apresentarAluno();


// Função 2: calcularDobro
function calcularDobro(numero) {
  let dobro = numero * 2;
  console.log(`O dobro de ${numero} é ${dobro}.`);
  return dobro;
}


let resultadoDobro = calcularDobro(5);
console.log(`O retorno de calcularDobro foi: ${resultadoDobro}`);



// Função 3: verificarIdade
function verificarIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(verificarIdade(20)); 
console.log(verificarIdade(15)); 

 

// Função 4: somarValores
function somarValores(num1, num2) {
  let soma = num1 + num2;
  console.log(`A soma de ${num1} e ${num2} é ${soma}.`);
  return soma;
}


let resultadoSoma = somarValores(10, 7);
console.log(`O retorno de somarValores foi: ${resultadoSoma}`);

 

// Função 5: calcularMedia
function calcularMedia(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;
  console.log(`A média das notas é ${media.toFixed(2)}.`); 
  return media;
}


let resultadoMedia = calcularMedia(7.5, 8.0, 6.5);
console.log(`O retorno de calcularMedia foi: ${resultadoMedia}`);



// Função 6: verificarPar
function verificarPar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}


console.log(verificarPar(4));  
console.log(verificarPar(7));  
