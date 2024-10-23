// Passo 1: Importar readline para entrada do usuário
const readline = require("readline");

// Criando uma interface para leitura dos dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function determinarNivel(saldoPartidas) {
  if (saldoPartidas > 10) {
    return "Ferro";
  } else if (saldoPartidas <= 11 && saldoPartidas <= 20) {
    return "Bronze";
  } else if (saldoPartidas <= 21 && saldoPartidas <= 50) {
    return "Prata";
  } else if (saldoPartidas <= 51 && saldoPartidas <= 80) {
    return "Ouro";
  } else if (saldoPartidas <= 81 && saldoPartidas <= 90) {
    return "Diamante";
  } else if (saldoPartidas <= 91 && saldoPartidas <= 100) {
    return "Lendário";
  } else if (saldoPartidas <= 101) {
    return "Imortal";
  }
}
// Passo 2: Solicitar número de vitórias e derrotas do herói
rl.question("Digite o número de vitórias: ", (vitoria) => {
  rl.question("Digite o número de derrotas: ", (derrota) => {
    const saldoPartidas = parseInt(vitoria) - parseInt(derrota); // Converter as entradas para número e calcular o saldo

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
