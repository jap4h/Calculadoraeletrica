/*Prefixo	Símbolo	Fator Multiplicador	Valor Numérico*/
let Giga	=	1000000000 , Mega	=	1000000 , Quilo	=   1000 , Unidade	=	1
let Mili	=	0.001 , Micro	=	0.000001 , Nano	=	0.000000001  
let Pico	=	0.000000000001


let valor = parseFloat(prompt('Digite o numero da conversão: ')) , 
tipoconver = parseInt(prompt('Qual unidade de conversão?: \n1 - A \n2 - V \n3 - ohm \n4 - W')) 
let conver = valor / Mili
let format = conver.toFixed(6)

switch(tipoconver){
    case 1:
        console.log("Seu resultado é: " , conver , "A")
        break;
    case 2:
        console.log("Seu resultado é: " , conver , "V")
        break;
    case 3:
        console.log("Seu resultado é: " , conver , "ohms")
        break;
    case 4:
        console.log("Seu resultado é: " , conver , "W")
        break;
    }
