const num1 = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
    
numeroTitulo.innerHTML = num1;
texto.innerHTML = 
`<p>Raiz quadrada: ${num1 ** (1/2)}</br></p>
<p>${num1} é inteiro: ${Number.isInteger(num1)}</br></p>
<p>É NaN: ${isNaN(num1)}</br></p>
<p>Arredondando para baixo: ${Math.floor(num1)}</br></p>
<p>Arredondando para cima: ${Math.ceil(num1)}</br></p>
<p>Com duas casas decimais: ${num1.toFixed(2)}</br></p>`;