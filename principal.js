

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

let randomNumber = Math.floor(Math.random() * 100) + 1;
    let guesses = document.querySelector('.guesses');
    let lastResult = document.querySelector('.lastResult');
    let lowOrHi = document.querySelector('.lowOrHi');
    let guessSubmit = document.querySelector('.guessSubmit');
    let guessField = document.querySelector('.guessField');
    let guessCount = 1;
    let resetButton;

    function checkGuess() {
      let userGuess = Number(guessField.value);
      if (guessCount === 1) {
        guesses.textContent = 'Propositions précédentes : ';
      }

      guesses.textContent += userGuess + ' ';

      if (userGuess === randomNumber) {
        lastResult.textContent = 'Bravo, vous avez trouvé le nombre !';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
      } else if (guessCount === 10) {
        lastResult.textContent = '!!! PERDU !!!';
        lowOrHi.textContent = '';
        setGameOver();
      } else {
        lastResult.textContent = 'Faux!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
          lowOrHi.textContent='Le nombre saisi est trop petit !' ;
        } else if(userGuess > randomNumber) {
          lowOrHi.textContent = 'Le nombre saisi est trop grand!';
        }
      }

      guessCount++;
      guessField.value = '';
    }

    guessSubmit.addEventListener('click', checkGuess);

    function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Rejouer';
      document.body.appendChild(resetButton);
      resetButton.addEventListener('click', resetGame);
    }

    function resetGame() {
      guessCount = 1;
      let resetParas = document.querySelectorAll('.resultParas p');
      for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent='';
      }

      resetButton.parentNode.removeChild(resetButton);
      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value='';
      guessField.focus();
      lastResult.style.backgroundColor='white';
      randomNumber=Math.floor(Math.random() * 100) + 1;
    }