//Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. 
//Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. 
//Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. 
//Ao final, mostrar a média de litros bebidos por pessoa na festa.
alert("Festa de Familia  alemã")

let familia 
let chop 

familia = 45  
chop = 300 

Quantidadegasta = Number(prompt("Qual foi o gsto de chop? "))
Quantidadequesobrou = Number(prompt("Qual foi quantidade quee sobrou? "))

ResultadoChopp = chop - Quantidadegasta - Quantidadequesobrou
Final = ResultadoChopp / familia

alert ('Média por pessoa: ' + Final) 