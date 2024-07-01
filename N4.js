//Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores.
//Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e
//total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o 
//percentual que cada um representa em relação ao total de eleitores. 
alert("Votos da eleição")

let numerodeEleitores
let numerodeVotos1
let numerodeVotos2
let numerodeVotosBranco
let numerodeVotosNulos

numerodeEleitores = Number(prompt("Numero total de votos: "))
numerodevotos1 = Number(prompt("Numero total de votos no primeiro eleitor: "))
numerodeVotos2 = Number(prompt("Numero total de votos no segundo eleitor: "))
numerodeVotosBranco = Number(prompt("Numero total de votos brancos: "))
numerodeVotosNulos = Number(prompt("Numero total de votos nulos: "))

PercentualVotos1 = numerodeVotos1 / numeroEleitores
PercentualVotos11 = PercentualVotos1 * 100
PercentualVotos2 = numerodeVotos2 / numeroEleitores
PercentualVotos22 = PercentualVotos2 * 100
PercentualVotosBranco = numerodeVotosBranco / numeroEleitores
PercentualVotosBranco2 = PercentualVotosBranco * 100
PercentualVotosNulos = numeroVotosNulos / numeroEleitores
PercentualVotosNulos2 = PercentualVotosNulos * 100

alert ('O percentual de votos no primeiro candidato é: %' + PercentualVotos11)
alert ('O percentual de votos no segundo candidato é: %' + PercentualVotos22)
alert ('O percentual de votos em branco é: %'+ PercentualVotosBranco2)
alert ('O percentual de votos nulos é: %' + PercentualVotosNulos2)
alert("Final ") 