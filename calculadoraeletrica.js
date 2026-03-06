function calceletrica(){
    let conversao = parseInt(prompt('Em qual medida deseja converter?: \n 1 - kw \n 2  - w'))
    let horas = parseInt(prompt('Digite as horas diarias de uso: '))
    let nome = prompt('Digite o nome do item: ')
    let tarifa = parseFloat(prompt('Digite p valor da taxa por watt/kilowatt: '))
    switch(conversao){
        case 1:
            let gastokw = parseFloat(prompt('Digite o gasto em kilowatts: '))
            let resulkw = ( gastokw * horas ) * tarifa
            console.log('Seu gasto em dinheiro com ' , nome , ' diario é: ' , resulkw , '\
            Seu gasto com ' , nome , ' mensal é: ' , (resulkw * 30 ))
            break;
        case 2:
            let gastow =  parseFloat(prompt('Digite a gasto em watts: '))
            let resulw = (( gastow / 1000 ) * horas ) * tarifa
            console.log('Seu gasto em dinheiro com ' , nome , ' é diario: ' , resulw , '\
Seu gasto com ' , nome , ' mensal é ' , ( resulw * 30 ))
    }
}
calceletrica()