let gamesSection = document.querySelector("section.games-list");
let description = document.querySelector("section.games-list");

function CreateGameTemplate(game) {
    let gameTemplate = document.createElement("div");
    
    let image = document.createElement("img");
    image.src = game.cover;

    let price = document.createElement("div");
    price.innerHTML = game.price;

    let title = document.createElement("div");
    title.innerHTML = game.title;

    image.appendChild(price);
    image.appendChild(title);
    gameTemplate.appendChild(image);

    return gameTemplate;
}

function loadGames() {
    games.forEach(game => {
        var template = CreateGameTemplate(game);
        gamesSection.appendChild(template);
    });
}

window.addEventListener('load', loadGames);