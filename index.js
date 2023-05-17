// Função para rolar os dados e atualizar as imagens
function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Jogador 1 Ganhou!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Jogador 2 Ganhou!";
  } else {
    document.querySelector("h1").textContent = "Empate!";
  }
}

// Obter referência ao botão
var rollButton = document.getElementById("rollButton");

// Adicionar um ouvinte de evento de clique ao botão
rollButton.addEventListener("click", rollDice);
