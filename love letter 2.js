$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});





    const openButton = document.getElementById('open');
    const resetButton = document.getElementById('reset');

    openButton.addEventListener('click', () => {
        // Alterar os textos dos botões
        openButton.textContent = 'Sim';
        resetButton.textContent = 'Não';

        // Alterar os comportamentos dos botões após abrir a carta
        openButton.onclick = () => {
            window.location.href = "index4.html";
            // Aqui você pode adicionar mais lógica para o "Sim"
        };

        resetButton.onclick = () => {
            alert('Você escolheu NÃO');
            // Aqui você pode adicionar mais lógica para o "Não"
        };
    });

    resetButton.addEventListener('click', () => {
        // Fechar a carta e redefinir os botões
        openButton.textContent = 'Abrir';
        resetButton.textContent = 'Fechar';

        // Redefinir os comportamentos dos botões para o original
        openButton.onclick = null;
        resetButton.onclick = null;
    });


