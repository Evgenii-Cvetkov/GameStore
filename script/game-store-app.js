let gamesSection = document.querySelector('section.games-list');
let description = document.querySelector('section.games-list');

function createGameTemplate(game) {
    let gameTemplate = document.createElement('div');
    gameTemplate.classList.add('game');
    
    let image = document.createElement('img');
    image.src = game.cover;

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

    return gameTemplate;
}

//function loadGames() {
    games.forEach(game => {
        let template = createGameTemplate(game);
        gamesSection.appendChild(template);
    });
//}

//window.addEventListener('load', loadGames);