//Générer un nombre aléatoire entre 1 et 100.
let randomNumber = Math.floor(Math.random() * 100) + 1;
    //Fournir au joueur le moyen de saisir un nombre.
    let guesses = document.querySelector('.guesses');
    let lastResult = document.querySelector('.lastResult');
    let lowOrHi = document.querySelector('.lowOrHi');
    let guessSubmit = document.querySelector('.guessSubmit');
    let guessField = document.querySelector('.guessField');
    let guessCount = 1;
    let resetButton;

    //Vérifier si le nombre saisi par le joueur est correct.
    function checkGuess() {
      let userGuess = Number(guessField.value);
      if (guessCount === 1) {
        guesses.textContent = 'Propositions précédentes : ';
      }

      guesses.textContent += userGuess + ' ';

      //S'il est correct :
      //Afficher un message de félicitations.
      if (userGuess === randomNumber) {
        lastResult.textContent = 'Bravo, vous avez trouvé le nombre !';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        //Empêcher que le joueur saisisse de nouveau un nombre.
        setGameOver();
        //Incrémenter le nombre de tours de 1.
        //S'il est faux et que le joueur n'a plus de tours à jouer :
        //Informer le joueur qu'il a perdu et que la partie est finie.
        //Empêcher que le joueur saisisse de nouveau un nombre.
      } else if (guessCount === 10) {
        lastResult.textContent = '!!! GAME OVER !!!';
        lastResult.style.backgroundColor = 'red';
        lowOrHi.textContent = '';
        setGameOver();
        
        //Lui permettre d'entrer une nouvelle proposition de nombre.
      } else {
        lastResult.textContent = 'Faux!';
        lastResult.style.backgroundColor = 'orange';
        if (userGuess < randomNumber) {
          lowOrHi.textContent='Le nombre saisi est trop petit !' ;
        } else if(userGuess > randomNumber) {
          lowOrHi.textContent = 'Le nombre saisi est trop grand!';
        }
      }
      //S'il est faux et que le joueur a encore des tours à jouer :
      //Informer le joueur que sa proposition de nombre est fausse.
      guessCount++;
      guessField.value = '';
    }

    guessSubmit.addEventListener('click', checkGuess);

     //Afficher un contrôle pour que le joueur puisse rejouer.
    function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Rejouer';
      document.body.appendChild(resetButton);
      resetButton.addEventListener('click', resetGame);
    }
    //Afficher un contrôle pour que le joueur puisse rejouer.
    function resetGame() {
      guessCount = 1;
      let resetParas = document.querySelectorAll('.resultParas p');
      for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent='';
      }
      
    //Une fois le jeu redémarré, s'assurer que la logique du jeu et l'interface utilisateur sont complètement réinitialisées, puis revenir à l'étape 1
      resetButton.parentNode.removeChild(resetButton);
      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value='';
      guessField.focus();
      lastResult.style.backgroundColor='white';
      randomNumber=Math.floor(Math.random() * 100) + 1;
    }