
function buy(){

alert("Compra adicionada ao carrinho!");

}


// modo escuro

function toggleMode(){

document.body.classList.toggle("dark");

}


// busca simples

document.getElementById("search").addEventListener("keyup", function(){

let filter = this.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card => {

let text = card.innerText.toLowerCase();

card.style.display = text.includes(filter) ? "block" : "none";

});

});