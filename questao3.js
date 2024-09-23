let faturamentoMensal = [
    1200.00, 1400.50, 0.00, 1600.00, 1100.25, 0.00, 1350.75, 
    1500.80, 900.00, 0.00, 1700.40, 1800.60, 0.00, 1900.90
    // ... demais dias do mês
];

// Filtrar dias com faturamento
let diasComFaturamento = faturamentoMensal.filter(valor => valor > 0);

// Calcular o menor valor de faturamento
let menorValor = Math.min(...diasComFaturamento);

// Calcular o maior valor de faturamento
let maiorValor = Math.max(...diasComFaturamento);

// Calcular a média de faturamento
let mediaMensal = diasComFaturamento.reduce((a, b) => a + b, 0) / diasComFaturamento.length;

// Contar os dias com faturamento acima da média
let diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

// Exibir os resultados
console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);