let gamesSection = document.querySelector('section.games__container');
let descriptionSection = document.querySelector('section.game__active');
let returnButton = document.querySelector('.btn__return')


function createGameTemplate(game) {
    let gameTemplate = document.createElement('div');
    gameTemplate.classList.add('game');
    
    let image = document.createElement('img');
    image.src = game.cover;
    image.classList.add('game__image')

    let price = document.createElement('div');
    price.innerHTML = game.price;
    price.classList.add('price')
 
    let title = document.createElement('div');
    title.innerHTML = game.title;
    title.classList.add('title')

    let hoverInfo = document.createElement('div')
    hoverInfo.classList.add('hover__info')

    hoverInfo.appendChild(price);
    hoverInfo.appendChild(title);

    gameTemplate.appendChild(image);
    gameTemplate.appendChild(hoverInfo)
    gameTemplate.addEventListener("click", function() {
         hideGamesList();

         fillGameDescription(game) 

         showDescription();
    }); 
    return gameTemplate;
}

function showGamesList() {
    gamesSection.hidden = false;
}

function hideGamesList() {
    gamesSection.hidden = true;
}

function fillGameDescription(game) {

    let gameTitle = document.querySelector('.game__title')
    gameTitle.innerHTML = game.title

    let gameSize = document.querySelector('.game__size')
    gameSize.innerHTML = `${(game.size/1024/1024).toFixed(2)} GB`
  
    let gamePrice = document.querySelector('.game__price')
    gamePrice.innerHTML = `${game.price.toFixed(2)} RUR`
  
    let description = document.querySelector('.game__descr')
    description.innerHTML = game.description

    let mainImage = document.querySelector('.main__image');
    mainImage.src = game.cover;

    let pegiInfo = document.querySelector('.pegi-image')
    pegiInfo.src = game.pegi
}

function showDescription() {
    descriptionSection.hidden = false;
}

function hideDescription() {
    descriptionSection.hidden = true;
}

let gamesList = gamesSection.querySelector(".games__list");
games.forEach(game => {
    let template = createGameTemplate(game);
    gamesList.appendChild(template);
});

function backToMainPage() {
  returnButton.addEventListener("click", function() {
    hideDescription();
    showGamesList()
  });
}

backToMainPage()