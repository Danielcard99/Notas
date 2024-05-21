const containerNotas = document.getElementById("nota_container");
const btn = document.getElementById("btn");
const notas = document.querySelectorAll(".input_box");
// const del = document.querySelectorAll(".nota_container p img");

const atualizarLocalStorage = () => {
  localStorage.setItem("notas", containerNotas.innerHTML);
};

const exibirNotas = () => {
  containerNotas.innerHTML = localStorage.getItem("notas");
};

btn.addEventListener("click", () => {
  let novoElemento = `
  <p id="" contenteditable="true" class="input_box">
    <img id="btn_img" src="./img/dleete.png" alt="Botão para deletar a nota" />
  </p>`;
  containerNotas.innerHTML += novoElemento;
  atualizarLocalStorage();
});

exibirNotas();

containerNotas.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    atualizarLocalStorage();
  } else if (e.target.tagName === "P") {
    const notas = document.querySelectorAll(".input_box");
    notas.forEach((letra) => {
      letra.onkeyup = function () {
        atualizarLocalStorage();
      };
    });
  }
});

const removeBtn = document.getElementById("btn_img");
