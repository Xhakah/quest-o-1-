let faturamentoEstados = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

// Calcular o faturamento total
let faturamentoTotal = Object.values(faturamentoEstados).reduce((a, b) => a + b, 0);

// Calcular e exibir o percentual de representação de cada estado
for (let estado in faturamentoEstados) {
    let percentual = (faturamentoEstados[estado] / faturamentoTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}