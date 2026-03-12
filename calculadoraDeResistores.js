let quantidadeDeFaixas = prompt("O resistor tem 4 ou 5 faixas?");

let corDaFaixa1 = prompt("Cor da 1ª faixa:");
let corDaFaixa2 = prompt("Cor da 2ª faixa:");
let corDaFaixa3 = prompt("Cor da 3ª faixa:");
let corDaFaixa4 = prompt("Cor da 4ª faixa:");
let corDaFaixa5 = "";

if (quantidadeDeFaixas == "5") {
    corDaFaixa5 = prompt("Cor da 5ª faixa:");
}

let primeiroDigito = "";
if (corDaFaixa1 == "preto") { primeiroDigito = "0"; }
if (corDaFaixa1 == "marrom") { primeiroDigito = "1"; }
if (corDaFaixa1 == "vermelho") { primeiroDigito = "2"; }
if (corDaFaixa1 == "laranja") { primeiroDigito = "3"; }
if (corDaFaixa1 == "amarelo") { primeiroDigito = "4"; }
if (corDaFaixa1 == "verde") { primeiroDigito = "5"; }
if (corDaFaixa1 == "azul") { primeiroDigito = "6"; }
if (corDaFaixa1 == "violeta") { primeiroDigito = "7"; }
if (corDaFaixa1 == "cinza") { primeiroDigito = "8"; }
if (corDaFaixa1 == "branco") { primeiroDigito = "9"; }

let segundoDigito = "";
if (corDaFaixa2 == "preto") { segundoDigito = "0"; }
if (corDaFaixa2 == "marrom") { segundoDigito = "1"; }
if (corDaFaixa2 == "vermelho") { segundoDigito = "2"; }
if (corDaFaixa2 == "laranja") { segundoDigito = "3"; }
if (corDaFaixa2 == "amarelo") { segundoDigito = "4"; }
if (corDaFaixa2 == "verde") { segundoDigito = "5"; }
if (corDaFaixa2 == "azul") { segundoDigito = "6"; }
if (corDaFaixa2 == "violeta") { segundoDigito = "7"; }
if (corDaFaixa2 == "cinza") { segundoDigito = "8"; }
if (corDaFaixa2 == "branco") { segundoDigito = "9"; }

let valorDosDigitosAgrupados = "";
let corParaMultiplicar = "";
let corParaTolerancia = "";

if (quantidadeDeFaixas == "4") {
    valorDosDigitosAgrupados = primeiroDigito + segundoDigito;
    corParaMultiplicar = corDaFaixa3;
    corParaTolerancia = corDaFaixa4;
} else {
    let terceiroDigito = "";
    if (corDaFaixa3 == "preto") { terceiroDigito = "0"; }
    if (corDaFaixa3 == "marrom") { terceiroDigito = "1"; }
    if (corDaFaixa3 == "vermelho") { terceiroDigito = "2"; }
    if (corDaFaixa3 == "laranja") { terceiroDigito = "3"; }
    if (corDaFaixa3 == "amarelo") { terceiroDigito = "4"; }
    if (corDaFaixa3 == "verde") { terceiroDigito = "5"; }
    if (corDaFaixa3 == "azul") { terceiroDigito = "6"; }
    if (corDaFaixa3 == "violeta") { terceiroDigito = "7"; }
    if (corDaFaixa3 == "cinza") { terceiroDigito = "8"; }
    if (corDaFaixa3 == "branco") { terceiroDigito = "9"; }
    
    valorDosDigitosAgrupados = primeiroDigito + segundoDigito + terceiroDigito;
    corParaMultiplicar = corDaFaixa4;
    corParaTolerancia = corDaFaixa5;
}

let multiplicadorNumerico = 1;
if (corParaMultiplicar == "preto") { multiplicadorNumerico = 1; }
if (corParaMultiplicar == "marrom") { multiplicadorNumerico = 10; }
if (corParaMultiplicar == "vermelho") { multiplicadorNumerico = 100; }
if (corParaMultiplicar == "laranja") { multiplicadorNumerico = 1000; }
if (corParaMultiplicar == "amarelo") { multiplicadorNumerico = 10000; }
if (corParaMultiplicar == "verde") { multiplicadorNumerico = 100000; }
if (corParaMultiplicar == "azul") { multiplicadorNumerico = 1000000; }
if (corParaMultiplicar == "violeta") { multiplicadorNumerico = 10000000; }
if (corParaMultiplicar == "dourado") { multiplicadorNumerico = 0.1; }
if (corParaMultiplicar == "prateado") { multiplicadorNumerico = 0.01; }

let valorDaToleranciaPorcentagem = "";
if (corParaTolerancia == "marrom") { valorDaToleranciaPorcentagem = "1%"; }
if (corParaTolerancia == "vermelho") { valorDaToleranciaPorcentagem = "2%"; }
if (corParaTolerancia == "verde") { valorDaToleranciaPorcentagem = "0.5%"; }
if (corParaTolerancia == "azul") { valorDaToleranciaPorcentagem = "0.25%"; }
if (corParaTolerancia == "violeta") { valorDaToleranciaPorcentagem = "0.1%"; }
if (corParaTolerancia == "cinza") { valorDaToleranciaPorcentagem = "0.05%"; }
if (corParaTolerancia == "dourado") { valorDaToleranciaPorcentagem = "5%"; }
if (corParaTolerancia == "prateado") { valorDaToleranciaPorcentagem = "10%"; }

let resultadoCalculadoEmOhms = Number(valorDosDigitosAgrupados) * multiplicadorNumerico;
let textoFinalFormatado = resultadoCalculadoEmOhms + " Ω";

if (resultadoCalculadoEmOhms >= 1000000) {
    textoFinalFormatado = (resultadoCalculadoEmOhms / 1000000) + " MΩ";
} else if (resultadoCalculadoEmOhms >= 1000) {
    textoFinalFormatado = (resultadoCalculadoEmOhms / 1000) + " kΩ";
}

document.write("<h1>Resultado do Cálculo</h1>");
document.write("O valor da resistência é: " + textoFinalFormatado);
document.write("<br>Tolerância: " + valorDaToleranciaPorcentagem);
