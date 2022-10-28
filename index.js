const arrayOfSentences = [
    [
        'insulte ta daronne sinon boit 4 gorgées',
        'commence, épellez le prénom de la daronne de votre voisin de droite, le(la) bouffone) qui se trompe boit 3 gorgées',
        'fais 10 pompes ou bois 3 gorgées',
        'bois un 7 gorgées ou vas dans la piscine',
        'bois 5 gorgées',
        'bois 4 gorgées',
        'bois 1 gorgées',
        'bois 2 gorgées',
        'bois 3 gorgées',
        'gros bouffon',
        'commence, dans ma valise il y a',
        'est un bg',
    ],
    [
        'Les prénoms contenant un L boivent 3 gorgées',
        'Les plus de 90 kg boivent 2 gorgées',
        'Dans le cul de ta mère : le 1er qui se trompent boit 3 gorgées',
        "Les marques de clopes : le 1er qui répète ou qui n'a plus d'idées boit 2 gorgées, le dernier à avoir bu commence",
        'Ceux qui ont déjà chier dans un endroit inapproprié boivent 2 gorgées, le pire en prend 2 supplémntaires (vas aux chiottes enculé)',
        'Votez pour le plus gros casse-couilles de la soirée, et choisissez le nombre de gorgées que ce petit con vas prendre',
        'Votez pour le plus gros rat de la soirée qui devra prendre 3 gorgées',
        "Jeux en équipe : Faites 2 équipes ; les leaders de chacune s'affrontent au chi-fou-mi, les perdants boivent tous 4 gorgées",
    ],
]

let arrayOfPlayer = []

addPlayer.addEventListener('click', () => {
    if (insertPlayer.value !== '') {
        arrayOfPlayer.push(insertPlayer.value)
        console.log(arrayOfPlayer)
        showPlayers.innerHTML += `<li class="list-item"> ${insertPlayer.value}`
        insertPlayer.value = ''
    }
})

startGame.addEventListener('click', () => {
    createGame.style.display = 'none'
    inGame.style.display = 'block'
})

document.body.addEventListener('click', () => {
    switchSentence()
})
console.log(arrayOfSentences[1].length)

const switchSentence = () => {
    let numberSentence = 0
    const numberArray = Math.floor(2 * Math.random())

    console.log(numberSentence)

    if (numberArray === 1) {
        numberSentence = Math.floor(arrayOfSentences[1].length * Math.random())
        showSentence.innerHTML = arrayOfSentences[1][numberSentence]
        console.log('test1')
    } else {
        const numberPlayer = Math.floor(arrayOfPlayer.length * Math.random())
        numberSentence = Math.floor(arrayOfSentences[0].length * Math.random())
        showSentence.innerHTML =
            arrayOfPlayer[numberPlayer] +
            ' ' +
            arrayOfSentences[0][numberSentence]
    }
}
