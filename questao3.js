let faturamentoMensal = [
    1200.00, 1400.50, 0.00, 1600.00, 1100.25, 0.00, 1350.75, 
    1500.80, 900.00, 0.00, 1700.40, 1800.60, 0.00, 1900.90
   
];

/
let diasComFaturamento = faturamentoMensal.filter(valor => valor > 0);


let menorValor = Math.min(...diasComFaturamento);

/
let maiorValor = Math.max(...diasComFaturamento);

let mediaMensal = diasComFaturamento.reduce((a, b) => a + b, 0) / diasComFaturamento.length;

let diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
