const menu = document.getElementById("js-menu");
const menuLista = document.querySelector(".caixa");

function ativarMenu(event) {
  event.currentTarget.classList.toggle("ativo");
  menuLista.classList.toggle("ativo");
}

function clicarFora(event) {
  console.log(event);
  if (event.target === this) {
    menuLista.classList.remove("ativo");
    menu.classList.remove("ativo");
  }
}

menu.addEventListener("click", ativarMenu);
menuLista.addEventListener("click", clicarFora);
