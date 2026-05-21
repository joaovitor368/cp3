const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("ativo");
  });
}

const formContato = document.querySelector("#formContato");
const mensagem = document.querySelector("#mensagem");

if (formContato && mensagem) {
  formContato.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value;

    mensagem.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

    formContato.reset();
  });
}