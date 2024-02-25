vitorias = 248
derrotas = 159

function calculoRank (vitorias, derrotas) {
  let saldo_vitorias = vitorias - derrotas
  let rank
    
    if (saldo_vitorias < 10) {rank = "Ferro"}
      else if  (saldo_vitorias >= 11 && saldo_vitorias <= 20) {rank = "Bronze"}
      else if (saldo_vitorias >= 21 && saldo_vitorias <= 50) {rank = "Prata"}
      else if (saldo_vitorias >= 51 && saldo_vitorias <= 80) {rank = "Ouro"}
      else if (saldo_vitorias >= 81 && saldo_vitorias <= 90) {rank = "Diamante"}
      else if (saldo_vitorias >= 91 && saldo_vitorias <= 100) {rank = "Lendário"}
        else {rank = "Imortal"}
    
  return {saldo_vitorias, rank};

}
 
let { saldo_vitorias, rank } = calculoRank(vitorias, derrotas);
console.log("O Herói tem um saldo de " + saldo_vitorias + " vitórias e está no nível " + rank);