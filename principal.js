

//Générer un nombre aléatoire entre 1 et 100.
//Fournir au joueur le moyen de saisir un nombre.
//Vérifier si le nombre saisi par le joueur est correct.
//S'il est correct :
//Afficher un message de félicitations.
//Empêcher que le joueur saisisse de nouveau un nombre.
//Afficher un contrôle pour que le joueur puisse rejouer.
//S'il est faux et que le joueur a encore des tours à jouer :
//Informer le joueur que sa proposition de nombre est fausse.
//Lui permettre d'entrer une nouvelle proposition de nombre.
//Incrémenter le nombre de tours de 1.
//S'il est faux et que le joueur n'a plus de tours à jouer :
//Informer le joueur qu'il a perdu et que la partie est finie.
//Empêcher que le joueur saisisse de nouveau un nombre.
//Afficher un contrôle pour que le joueur puisse rejouer.
//Une fois le jeu redémarré, s'assurer que la logique du jeu et l'interface utilisateur sont complètement réinitialisées, puis revenir à l'étape 1

var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessField = document.querySelector('guessField');
var btnDOM = document.querySelector('btnDOM');

var guessCount = 1;
var resetBtn;

function checkGuess () {
    var userGuess = Number(nbatrouver.value);
    if (guessCount === 1) {
        guesses.textContent = 'Propositions précédantes : ';
    }
    guesses.textContent += userNb + ' ';
    btnDOM.addEventListener('click', checkGuess);

    if (userGuess === randomNumber) {
        lastResult.textContent = 'GG vous avez trouver !';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'Vous avez perdu :(';
        setGameOver();
    } else {
        lastResult.textContent = "Ce n'est pas la bonne réponse !";
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Le nombre saisi est trop petit !';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Le nombre saisi est trop grand !';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    btnDOM.disabled = true;
    resetBtn = document.createElement('button');
    resetBtn.body.appendChild(resetBtn);
    resetBtn.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    var resetParas = document.querySelectorAll('.resulParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    resetBtn.parentNode.removeChild(resetBtn);

    guessField.disabled = false;
    btnDOM.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}