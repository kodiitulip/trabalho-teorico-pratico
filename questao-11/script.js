function atualizarDataHora() {
  const agora = new Date();
  const dataHoraFormatada = agora.toLocaleString();
  document.getElementById('dataHora').innerText = dataHoraFormatada;
}

setInterval(atualizarDataHora, 1000);
atualizarDataHora();