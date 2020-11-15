let header = document.getElementById("header"),
    container = document.getElementById('first-game-container'),
    firstGame = games[0];
    images = container.getElementsByTagName("img");
    firstGameImage = images[0],
    gamesItemTitle = container.getElementsByClassName('.games__item-title'),
    gameDescr = document.querySelector(".gameDescr"),
    firstGameImage.src = firstGame.cover;


header.insertAdjacentHTML("afterbegin", "<div class=container><h1 class=main__title>Jeka game store</h1></div>");



function mainGameTitle() {
  let mainTitle = container.querySelector(".games__item-title");
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
  let mainImage = document.querySelector(".games__item-image_main");
  mainImage.innerHTML = games[0].cover;
 }
const showDescr = document.querySelector('.games__item-link_main');
const otherGames = document.querySelector('.other__games')
showDescr.addEventListener('click', () => {
  otherGames.classList.toggle('other__games_hide')
})

// let showDescription = function() {
//   if (otherGames.classList.contains('other__games_hide')) {
//     container.insertAdjacentHTML("beforeend", <div class="game__description">dasfsdfasdfa</div>)
//   }

// }

mainGameTitle()
mainGamePrice()
mainGameImage()
footer()

// console.log(games[0].cover)

// console.log(games);
// console.log(games[0]);
// console.log(images);
// console.log(firstGameImage);