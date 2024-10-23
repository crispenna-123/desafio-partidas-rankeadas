// Passo 1: Importar readline para entrada do usuário
const readline = require("readline");

// Criando uma interface para leitura dos dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para determinar o nível do herói com base no saldo de partidas
function determinarNivel(saldoPartidas) {
  if (saldoPartidas <= 10) {
    return "Ferro";
  } else if (saldoPartidas <= 20) {
    return "Bronze";
  } else if (saldoPartidas <= 50) {
    return "Prata";
  } else if (saldoPartidas <= 80) {
    return "Ouro";
  } else if (saldoPartidas <= 90) {
    return "Diamante";
  } else if (saldoPartidas <= 100) {
    return "Lendário";
  } else if (saldoPartidas > 100) {
    return "Imortal";
  } else {
    return "Nível desconhecido"; // Para casos imprevistos
  }
}

// Passo 2: Solicitar número de vitórias e derrotas do herói
rl.question("Digite o número de vitórias: ", (vitoria) => {
  rl.question("Digite o número de derrotas: ", (derrota) => {
    const vitoriaNum = parseInt(vitoria);
    const derrotaNum = parseInt(derrota);
    
    // Verificar se as entradas são números válidos
    if (isNaN(vitoriaNum) || isNaN(derrotaNum)) {
      console.log("Por favor, insira números válidos para vitórias e derrotas.");
      rl.close();
      return;
    }

    const saldoPartidas = vitoriaNum - derrotaNum; // Calcular o saldo

    // Determinar o nível do herói
    const nivel = determinarNivel(saldoPartidas);

    // Exibir o resultado
    console.log(
      `O herói tem um saldo de ${saldoPartidas} e está no nível ${nivel}.`
    );

    // Fechar a interface
    rl.close();
  });
});
