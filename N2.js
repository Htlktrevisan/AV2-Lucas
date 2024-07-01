//Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). 
//Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. 
alert("Usuário")

let anodeNasimento
let anoAtual 
let messes 
let semanas 
let dias 

anodeNasimento = Number(prompt("Digite o ano que você nasceu: "))
anoAtual = 2024
semanas = 52 
dias = 365
resultadodaIdade = anoAtual - anodeNasimento
resultadodaIdade = anoAtual - anodeNascimento
resultadodeMesses = resultadoIdade * 12
resultadodaSemanas = resultadoIdade * 52
resultadodeDias = resultadoIdade * 365

alert ("Sua idade é " + resultadodaIdade)
alert ("Messes " + resultadodeMesses)
alert ("Semanas " + resultadodaSemanas)
alert ("Dias " + resultadodeDias)