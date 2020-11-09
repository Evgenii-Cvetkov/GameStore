let header = document.getElementById("header"),
    container = document.getElementById('first-game-container'),
    firstGame = games[0];
    images = container.getElementsByTagName("img");
    firstGameImage = images[0],
    gamesItemTitle = document.getElementsByClassName('.games__item-title');


header.insertAdjacentHTML("afterbegin", "<div class=container><h1>Jeka game store</h1></div>");



function mainGameTitle() {
  let mainTitle = document.querySelector(".games__item-title");
  mainTitle.innerHTML = games[0].title;
};
function mainGamePrice() {
  let mainPrice = document.querySelector(".games__item-price");
  mainPrice.innerHTML = games[0].price;
};
function footer() {
  let footer = document.querySelector(".footer__text");
  footer.innerHTML = "(c)jeka delal etot store";
}
function mainGameImage() {
  let mainImage = document.querySelector(".games__item-image__main");
  mainImage.innerHTML = games[0].cover.img;
}
const showDescr = document.querySelector('.games__item-link_main');
const otherGames = document.querySelector('.other__games')
showDescr.addEventListener('click', () => {
  otherGames.classList.toggle('other__games_hide')
})

let shoeDescription = function() {
  if (otherGames.classList.contains('other__games_hide')) {
    
  }

}

mainGameTitle()
mainGamePrice()
mainGameImage()
footer()

console.log(games);
console.log(games[0]);
console.log(images);
console.log(firstGameImage);