let header = document.getElementById("header"),
    container = document.getElementById('first-game-container'),
    firstGame = games[0];
    images = container.getElementsByTagName("img");
    firstGameImage = images[0],
    gamesItemTitle = container.getElementsByClassName('.games__item-title'),
    gameDescr = document.querySelector(".game__description"),
    firstGameImage.src = firstGame.cover;
    showDescr = document.querySelector('.games__item-link_main');
    otherGames = document.querySelector('.other__games'),
    showDescription = document.querySelector('.main__game-description');
    mainImage = document.querySelector('.games__item-image_main'),
    mainContainer = document.querySelector('.games__container'),
    gameTitle = document.querySelector('.game__title'),
    price = document.querySelector('.game__price'),
    size = document.querySelector('.game__size'),
    btn = document.querySelector('.btn')
    


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
};

function mainGameImage() {
  mainImage.innerHTML = games[0].cover;
 };


function hideContainer() {
  mainContainer.style.display = "none",
  showDescription.style.display = "flex"
}
function showContainer() {
  mainContainer.style.display = "flex",
  showDescription.style.display = "none"
}
function addOtherGames () {
  let out ='';
  for (i = 1; i < 5; i++) {
    out += '<img class="other__game-image" src="' + games[i].cover + '">'
  }
  otherGames.innerHTML = out;
}
function mainGameDescription () {
  gameDescr.innerHTML = games[0].description;
}
function showGameTitle() {
  gameTitle.innerHTML = games[0].title;
}
function gamePrice() {
  price.innerHTML = `${games[0].price} RUR`;
}
function gameSize() {
  size.innerHTML = `${games[0].size} MB`;
}

showDescr.addEventListener('click', hideContainer),
btn.addEventListener('click', showContainer)

mainGameTitle()
mainGamePrice()
mainGameImage()
addOtherGames()
footer()
mainGameDescription()
showGameTitle()
gamePrice()
gameSize()