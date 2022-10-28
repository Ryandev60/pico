const arrayOfSentences = [
    [
        // THEMES/COMMENCE
        "commence, les jours de la semaine, dimanche bois 3 gorgées",
        "commence, les rappeurs FR, celui qui ne trouve pas ou répéte bois 2 gorgées",
        "commence, les rappeurs US, celui qui ne trouve pas ou répéte bois 2 gorgées",
        "commence, cite un chanteur/rappeur, à tour de rôle, citez un feat du rappeur/chanteur précédent, celui qui perd boit 2 gorgées",
        "commence, épellez le prénom de la daronne de votre voisin de droite, le(la) bouffone) qui se trompe boit 3 gorgées",
        "commence, dans ma valise il y a",
        "commence, les marques de clopes : le 1er qui répète ou qui n'a plus d'idées boit 2 gorgées, le dernier à avoir bu commence",
        "commence, les marques de capotes : le 1er qui répète ou qui n'a plus d'idées boit 2 gorgées, le dernier à avoir bu commence",
        "commence, les marques de vêtements : le 1er qui répète ou qui n'a plus d'idées boit 2 gorgées, le dernier à avoir bu commence",
        "commence, les marques de voitures : le 1er qui répète ou qui n'a plus d'idées boit 2 gorgées, le dernier à avoir bu commence",
        "commence, les variétés de marijuana : le 1er qui répète ou qui n'a plus d'idées boit 2 gorgées, le dernier à avoir bu commence",
        "commence, les slogans publicitaires : le 1er qui répète ou qui n'a plus d'idées boit 2 gorgées, le dernier à avoir bu commence",
        "commence, les personnages des Simpsons : le 1er qui répète ou qui n'a plus d'idées boit 2 gorgées, le dernier à avoir bu commence",
        "commence, les grosses célébrités : le 1er qui répète ou qui n'a plus d'idées boit 2 gorgées, le dernier à avoir bu commence",
        //

        // VIRUS
        "fais une impro pour clasher ton voisin de droite, si c'est claquer au sol, prend 3 gorgées",
        "si tu ferme ta gueule pendant 10min, distribue 5 gorgées, sinon bois-les",
        "tu est la salope du groupe, sert nos verres pendant 15 min",
        "chaque fois qu'un joueur bois des gorgées tu leurs en prend une pendant 4 tours",
        "tes gorgées sont multipliées par 1.5 pendant 4 tours",
        "le A n'existe plus, pendant 5 tours chaque fois que tu le pronnoncera, bois 1 gorgée",
        "tu est le contre-trou noir chaque fois qu'un joueur bois tu peux distribuer 1 gorgée",

        //

        // DIVER
        "cite les composants chimiques du soleil ou bois 2 gorgées",
        "cite les composants chimiques du lemonYourMom ou boit 2 gorgées",
        "insulte ta daronne sinon boit 4 gorgées",
        "insulte ton gros daron ou bois 3 gorgées",
        "donne 2 de tes défauts, si les autres ne sont pas daccord prends 3 gorgées",
        //

        // ACTION
        "fais 10 pompes ou bois 3 gorgées",
        "bois un 7 gorgées ou vas dans la piscine",
        "mange de l'herbe ou boivait 2 gorgées",
        "prend toi une grosse fessée par ton voisin de droite ou bois 4 gorgées",
        "fais un triple salto arrière ou bois 2 gorgées",
        "fume une clope ou bois 3 gorgées",
        "rajoute 1/4 d'alcool dans ton verre",
        "reste debout pendant 4 minutes ou prend 3 gorgées",
        "bois 3 gorgées dans le verre de ton voisin de gauche",
        "compte de 1 à 100 en moins de 20 secondes ou bois 4 gorgées",
        "écris bite sur ton front ou bois 3 gorgées",
        "fais 10 tours sur toi même ou bois 3 gorgées",
        "danse la tecktonik ou bois 3 gorgées",
        "fais la macarena si c'est de la merde bois 3 gorgées",
        //

        // JUSTE TU BOIS
        "bois 1 gorgées",
        "bois 2 gorgées",
        "bois 3 gorgées",
        "bois 4 gorgées",
        "bois 5 gorgées",
        //

        // JUSTE TU DISTRIVUE
        "distribu 1 gorgées",
        "distribu 2 gorgées",
        "distribu 3 gorgées",
        "distribu 4 gorgées",
        "distribu 5 gorgées",
        //

        // INUTILE
        "gros bouffon",
        "est un bg",
        "arrête de sucer",
        "pourquoi t'es moche",
        //

        // IMITE
        "imite Sarkozy pendant 4 tours",
        "imite François Hollande pendant 4 tours",
        "imite Didier Deschamps pendant 4 tours",
        "imite Homer Simpsons pendant 4 tours",
        "imite Marge Simpsons pendant 4 tours",
        "imite Mickey pendant 4 tours",
        "imite Maggie Simpsons pendant 4 tours",
        "imite Cyril Hannouna pendant 4 tours",
        "imite un gitan pendant 4 tours",
        "imite un voyou pendant 4 tours",
        "imite un bledar pendant 4 tours",
        "imite l'accent québequois pendant 4 tours",
        "imite l'accent congolais pendant 4 tours",
        "imite l'accent chinois pendant 4 tours",
        "imite JCVD ou prend 3 gorgées",
        "imite une tortue qui baise ou prend 3 gorgées",
        "imite un chat en train d'éjac ou prend 3 gorgées",
        "imite Jéremy bourré ou prend 3 gorgées",
        "imite un personnage de dessin animé, la première personne qui trouve distribue 3 gorgées, si personne trouve, tu les prends",
        "imite un animal, la première personne qui trouve distribue 3 gorgées, si personne trouve, tu les prends",
        "imite une personne présente, la première personne qui trouve distribue 3 gorgées, si personne trouve, tu les prends",
        "imite une personalitée la première personne qui trouve distribue 3 gorgées, si personne trouve, tu les prends",
        //

        // DUEL
        "Jeux en équipe : Faites 2 équipes ; les leaders de chacune s'affrontent au chi-fou-mi, les perdants boivent tous 4 gorgées",
        "Jeux en équipe : Faites 2 équipes ; les leaders de chacune s'affrontent au bras de fer chinois, les perdants boivent tous 4 gorgées",
        "Jeux en équipe : Faites 2 équipes ; les leaders de chacune s'affrontent au jeu de regard, les perdants boivent tous 4 gorgées",
        "Jeux en équipe : Faites 2 équipes ; les leaders de chacune s'affrontent à l'équilbre les perdants boivent tous 4 gorgées",
        "Jeux en équipe : Faites 2 équipes ; les leaders de chacune s'affrontent à celui qui bois le plus, les perdants boivent tous 4 gorgées",
        "Jeux en équipe : Faites 2 équipes ; les leaders de chacune s'affrontent à celui qui bois le plus, les perdants boivent tous 4 gorgées",
        //

        // REP DOM //
        "tous les malades distribuent 2 gorgées",
        "le dernier qui touche la piscine bois 5 gorgées",
        "ceux qui saute dans la piscine distribue 7 gorgées",
        //
    ],
    [
        // INUTILE
        "Les putains de bg qui ont crée ce jeu distribue 3 gorgées",
        //

        // VOTE
        "Votez pour la plus belle daronne, son/ses enfants boivent du sprite sa mère",
        "Votez pour le plus gros casse-couilles de la soirée, et choisissez le nombre de gorgées que ce petit con vas prendre",
        "Votez pour le plus gros rat de la soirée qui devra prendre 3 gorgées",
        "Votez pour le plus gros casse-couilles de la soirée, ce petit con prendra 3 gorgées",
        "Votez pour le plus gros rat de la soirée qui prendra 3 gorgées",
        "Votez pour le plus con de la soirée qui prendra 3 gorgées",
        "Votez pour la plus petite bite de la soirée qui prendra 3 gorgées",
        "Votez pour la plus grosse bite de la soirée qui prendra 3 gorgées",
        "Votez pour le plus gros cul de la soirée qui prendra un 1/2 cul sec",
        "Votez pour le prénom le plus éclaté de la soirée qui prendra 2 gorgées",

        //

        // PREMIER/DERNIER QUI
        "Le premier qui qui cite une marque de voiture avec la premiére lettre de son prénom distribue 2 gorgées",
        "Le premier qui montre ses fesses distribue 2 gorgées",
        "Le premier qui montre sa queue distribue 5 gorgées",
        "Le premier qui se lève bois 2 gorgées",
        "Le premier qui se lève distribue 2 gorgées",
        "Le premier qui dis Ryan le bg distribue 2 gorgées",
        "Le premier qui fini son verre distribue 15 gorgées",

        "Le dernier qui qui cite une marque de voiture avec la premiére lettre de son prénom distribue 2 gorgées",
        "Le dernier qui montre ses fesses distribue 2 gorgées",
        "Le dernier qui montre sa queue distribue 5 gorgées",
        "Le dernier qui se lève bois 2 gorgées",
        "Le dernier qui se lève distribue 2 gorgées",
        "Le dernier qui dis Ryan le bg distribue 2 gorgées",
        "Le dernier qui dis Antho le bg distribue 2 gorgées",
        //

        // SPECIFIQUE
        "Les prénoms contenant un L boivent 3 gorgées",
        "Les prénoms contenant un A boivent 3 gorgées",
        "Les prénoms contenant un E boivent 3 gorgées",
        "Les prénoms contenant un C boivent 3 gorgées",
        "Les prénoms contenant un J boivent 3 gorgées",
        "Les prénoms contenant un D boivent 3 gorgées",
        "Les capricornes et les cancer distribuent 2 gorgées",
        "Les sagitaires prennent 1 gorgée ",
        "Les poissons distribue 1 gorgée",
        "Les fumeurs, 2 gorgées chacun",
        "Les plus de 90 kg boivent 2 gorgées",
        "Les célibataires distribuent 2 gorgées",
        "Les personnes en couple depuis + de 5 ans distribuent 3 gorgées",
        "Les personnes qui ont le permis, vous avez la permissions de boire 2 gorgées",
        "Les personnes qui n'ont pas leur brevet des collège prennent 2 gorgées",

        //

        "Dans le cul de ta mère : le 1er qui se trompent boit 3 gorgées",

        // THEMES

        //

        // CEUX QUI
        "Ceux qui ont déjà chier dans un endroit inapproprié boivent 2 gorgées, le pire en prend 2 supplémntaires (vas aux chiottes enculé)",
        "Ceux qui ont des expressions beauf prennent 2 gorgées",
        "Ceux qui ont déja chier dans un endroit innapropié prennent 2 gorgées, le pire prend 4 gorgées",
        "Ceux qui ont déja pratiqué la masturbation + de 4 fois dans la même journées prennent 3 gorgées",
        "Ceux qui ont déja eu un trou noir avec la tise prennent 2 gorgées",
        "Ceux qui ont déja programmer prennent 2 gorgées",
        "Ceux qui ont déja nager dans une marre prennent 2 gorgées",
        "Ceux qui ont déja travailler dans la restauration prennent 2 gorgées",
        "Ceux qui ont déja travailler dans un aéroport prennent 2 gorgées",
        "Ceux qui étudient et aime le sexe distribue 3 gorgées",
        //

        // POUR OU CONTRE
        "Pour ou contre mettre les céréales avant le lait, les minoritaires prennent 2 gorgées",
        "Pour ou contre les arabes, les minoritaires prennent 2 gorgées",
        "Pour ou contre les italiens, les minoritaires prennent 2 gorgées",
        "Pour ou contre niker la mère d'un pote pour 1M d'euros, les minoritaires prennent 2 gorgées",
        "Pour ou contre manger son caca pour 1000€, les minoritaires prennent 2 gorgées",
        "Pour ou contre les français (hitoire de...), les minoritaires prennent 2 gorgées",
        "Pour ou contre les femmes, les minoritaires prennent 2 gorgées",
        "Pour ou contre les se faire bouffer le cul, les minoritaires prennent 2 gorgées",
        "Pour ou contre notre magnifique Picolorigolo, les minoritaires prennent 2 gorgées",
        "Pour ou contre mettre un deznozeur à Alexandre, les minoritaires prennent 2 gorgées",
        "Pour ou contre les poils, les minoritaires prennent 2 gorgées",
        "Pour ou contre aller aux putes, les minoritaires prennent 2 gorgées",
        //
    ],
]

let arrayOfPlayer = []

addPlayer.addEventListener("click", () => {
    if (insertPlayer.value !== "") {
        arrayOfPlayer.push(insertPlayer.value)
        console.log(arrayOfPlayer)
        showPlayers.innerHTML += `<li class='list-item'> ${insertPlayer.value}`
        insertPlayer.value = ""
    }
})

startGame.addEventListener("click", () => {
    createGame.style.display = "none"
    inGame.style.display = "block"
})

document.body.addEventListener("click", () => {
    switchSentence()
})
console.log(arrayOfSentences[1].length + arrayOfSentences[0].length)

const switchSentence = () => {
    let numberSentence = 0
    const numberArray = Math.floor(2 * Math.random())

    console.log(numberSentence)

    if (numberArray === 1) {
        numberSentence = Math.floor(arrayOfSentences[1].length * Math.random())
        showSentence.innerHTML = arrayOfSentences[1][numberSentence]
        console.log("test1")
        console.log(numberSentence)
    } else {
        const numberPlayer = Math.floor(arrayOfPlayer.length * Math.random())
        numberSentence = Math.floor(arrayOfSentences[0].length * Math.random())
        showSentence.innerHTML =
            arrayOfPlayer[numberPlayer] +
            " " +
            arrayOfSentences[0][numberSentence]
        console.log(numberSentence)
    }
}
