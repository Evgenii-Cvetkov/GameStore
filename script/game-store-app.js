let gamesSection = document.querySelector('section.games-list');

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
    hoverInfo.classList.add('hover-info')

    hoverInfo.appendChild(price);
    hoverInfo.appendChild(title);

    gameTemplate.appendChild(image);
    gameTemplate.appendChild(hoverInfo)
    gameTemplate.addEventListener("click", function() { createGameDescription(game) }); 

    return gameTemplate;
}

games.forEach(game => {
    let template = createGameTemplate(game);
    gamesSection.appendChild(template);
});

function createGameDescription(game){
    let gameSize = document.querySelector('.game__size')
    gameSize.innerHTML = `${(game.size/1024/1024).toFixed(2)} GB`
  
    let gamePrice = document.querySelector('.game__price')
    gamePrice.innerHTML = `${game.price.toFixed(2)} RUR`
  
    let description = document.querySelector('.game__descr')
    description.innerHTML = game.description
}

//createGameDescription()
console.log(games);