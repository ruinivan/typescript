const nome = 'Victor';
const sobrenome = 'Ruinivan';
const idade = 19;
const peso = 80;
const altura = 1.86;
let indiceMassaCorporea = peso / (altura * altura);
let anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}kg tem ${altura} de altura e seu IMC é de ${indiceMassaCorporea} e nasceu em ${anoNascimento}.`);