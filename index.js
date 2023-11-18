var gameList = [
    'https://i.pinimg.com/originals/4c/c5/dc/4cc5dc80bcb00be1e268b5c6fd61fa60.jpg',
    'https://i.pinimg.com/564x/5e/32/45/5e32452121727769e88a67f70a654f2c.jpg',
    'https://m.media-amazon.com/images/I/81Ypg5QxfvL.jpg',
    'https://static.displate.com/857x1200/displate/2020-10-09/d4ed2d2c2807dfa8912a9c5064f700c6_2a460bb3286735a6cd925ecb5c73b6fe.jpg'
]

var gameTitles = ['The Last of Us', 'Life is Strange', 'Sally Face', 'Little Missfoturne']

var gameLinks = ['https://store.steampowered.com/app/1888930/The_Last_of_Us_Part_I/', 'https://store.steampowered.com/app/319630/Life_is_Strange__Episode_1/', 'https://store.steampowered.com/app/541570/Sally_Face__Episode_One/', 'https://store.steampowered.com/app/714120/Little_Misfortune/']

function renderGames() {
    var gameListContainer = document.getElementById('gameListContainer')
    gameListContainer.innerHTML = ''

    gameList.forEach(function (el, i) {
        var gameContainer = document.createElement('div')
        gameContainer.classList.add('game-container')

        var gameImg = document.createElement('img')
        gameImg.src = el
        gameImg.onclick = function() {
            window.open(gameLinks[i], '_blank');
        }

        var gameP = document.createElement('p')
        gameP.textContent = gameTitles[i]

        gameContainer.appendChild(gameImg)
        gameContainer.appendChild(gameP)
        gameListContainer.appendChild(gameContainer)
    })
}

renderGames()

function addGame() {
    newGame = document.getElementById('game').value
    newGameTitle = document.getElementById('title').value
    newGameLink = document.getElementById('link').value

    if (gameTitles.includes(newGameTitle)) {
        alert('Esse jogo já existe no nosso banco de dados, informe outro')
    }
    else if (!newGame.endsWith('jpg' || 'png') || newGameTitle === null) {
        alert('Título ou link inválido!')
    } 
    else {
        gameList.push(newGame)
        gameTitles.push(newGameTitle)
        gameLinks.push(newGameLink)
        renderGames()
    }

    clean()
}

function removeGame() {
    removeGameByName = document.getElementById('remove').value

    if (!gameTitles.includes(removeGameByName)) {
        alert('Esse jogo não existe em nosso banco de dados')
    } else {
        var indexToRemove = gameTitles.indexOf(removeGameByName);

        gameTitles.splice(indexToRemove, 1)
        gameList.splice(indexToRemove, 1)
        gameLinks.splice(indexToRemove, 1)

        renderGames()
    }

    clean()
}

function clean() {
    document.getElementById('title').value = ''
    document.getElementById('game').value = ''
    document.getElementById('link').value = ''
    document.getElementById('remove').value = ''
}