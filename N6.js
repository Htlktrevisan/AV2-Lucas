//Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00.
// Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. 
alert("Fabrica de reciclagem")
let plastico 
let papel
let metal 

plastico = Number(prompt("Qual é quantidade de plastico:"))
papel = Number(prompt("Qual é quantidade de papel:"))
metal = Number(prompt("Qual é quantidade de metal: "))

plastico10kg = plastico * 2
papel30kg = papel * 3
metal50kg = metal * 5 

alert("Resultado") 