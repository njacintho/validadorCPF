"use strict";

console.log('Meu js caregado');

function validaCPF(cpf) {
  if (cpf.length != 11) {
    return false;
  } else {
    var numeros = cpf.substring(0, 9); // pega os primeiros 9 numeros

    var digitos = cpf.substring(9); // pega a partir no novo numero

    soma = 0;

    for (var i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i; //charAt retorna a posição da string na lista
    }

    console.log(soma);
    var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11; // soma é menor qeu 2 SE for igual a zero SENAO 11 - (soma % 11)
    //validação do primeiro digito

    if (resultado != digitos.charAt(0)) {
      return false;
    } //console.log(digitos.toString().charAt(0) + " é a primeira posição da variavel soma")


    soma = 0;
    numeros = cpf.substring(0, 10);

    for (var k = 11; k > 1; k--) {
      soma += numeros.charAt(11 - k) * k;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado != digitos.charAt(1)) {
      return false;
    } //console.log(digitos.toString().charAt(0) + " é a primeira posição da variavel soma")


    return true;
  }
}

function validacao() {
  console.log('Iniciando validação CPF');
  document.getElementById('success').style.display = 'none';
  document.getElementById('error').style.display = 'none';
  var cpf = document.getElementById('cpf_digitado').value; //ppuxando o valor do html pelo id='cpf_digitado

  var resultadoValidacao = validaCPF(cpf);

  if (resultadoValidacao) {
    // para validar se é false ou true, basta colocar o nome,não é necessario realizar a comparação
    document.getElementById('success').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'block';
  }
}
//# sourceMappingURL=script.dev.js.map
