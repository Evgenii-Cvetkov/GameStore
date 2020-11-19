let header = document.getElementById("header"),
    container = document.getElementById('first-game-container'),
    firstGame = games[0];
    images = container.getElementsByTagName("img");
    firstGameImage = images[0],
    gamesItemTitle = container.getElementsByClassName('.games__item-title'),
    gameDescr = document.querySelector(".gameDescr"),
    firstGameImage.src = firstGame.cover;
    showDescr = document.querySelector('.games__item-link_main');
    otherGames = document.querySelector('.other__games')


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
  let mainImage = document.querySelector(".games__item-image_main");
  mainImage.innerHTML = games[0].cover;
 };

function otherGamesToggle() {
    otherGames.classList.toggle('other__games_hide')
}

function addDescription() {
  let addDescr = document.querySelector('.main__game-description');
  addDescr.classList.toggle('main__game-description_hide')
  addDescr.innerHTML = games[0].description;
}

showDescr.addEventListener('click', otherGamesToggle),
showDescr.addEventListener('click', addDescription)


function addOtherGames () {
  let out ='';
  for (i = 1; i < 5; i++) {
    out += '<img class="other__game-image" src="' + games[i].cover + '">'
  }
  otherGames.innerHTML = out;
}

// let showGameDescr = document.querySelector('.game__description')
// function showDescription(otherGames) {
//   if (otherGames.classList.contains("other__games_hide")) {
//     showGameDescr.classList.add("game__description_open")
//   } else {
//     null
//   }
// } 

otherGamesToggle()
mainGameTitle()
mainGamePrice()
mainGameImage()
addOtherGames()
footer()