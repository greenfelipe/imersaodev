var nome = prompt("Olá! Qual o seu nome?");
var notaDoPrimeiroBimestre = prompt("Nota Primeiro Bimestre");
var notaDoSegundoBimestre = prompt("Nota Segundo Bimestre");
var notaDoTerceiroBimestre = prompt("Nota Terceiro Bimestre");
var notaDoQuartoBimestre = prompt("Nota Quarto Bimestre");


var notaDoPrimeiroBimestre = parseInt(notaDoPrimeiroBimestre);
var notaDoSegundoBimestre = parseInt(notaDoSegundoBimestre);
var notaDoTerceiroBimestre = parseInt(notaDoTerceiroBimestre);
var notaDoQuartoBimestre = parseInt(notaDoQuartoBimestre);


var notaFinal = (Number(notaDoPrimeiroBimestre) + Number(notaDoSegundoBimestre) + Number(notaDoTerceiroBimestre) + Number(notaDoQuartoBimestre)) / 4;

var notaFixada = notaFinal.toFixed(1);

// console.log((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre)/4)

alert("Será que vc passou de ano " + nome + "?");


// console.log((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre)/4)

// Desafio "Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não"

if (notaFixada <= 5.9 ) {
    alert(notaFixada + " - Que pena, " + nome + " não foi dessa vez!")
} else if ((notaFixada >= 6) && (notaFixada <= 7)) {
  alert(notaFixada + " - Essa foi por pouco hein, " + nome + "! .")
    } else {
        alert("Parabéns, " + nome + "! Nota:" + notaFixada )
  }




//Varí[aveis, strings, console.log, toFixed, operações matemáticas, concatenação



// Desafios desta aula!
// Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não - DONE
// Alterar o fundo da tela da maneira que achar mais legal - DONE
// Imprimir na própria página o resultado, ao invés do console - DONE
// Criar um conversor de temperaturas entre farenheit e celcius
// Colocar a conta inteira da média em apenas uma linha - DONE (COMENTADO)