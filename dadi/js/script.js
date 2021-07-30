// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//generare un numero random per il giocatore
userRoll = Math.ceil(Math.random() * 6);
document.getElementById('user').innerHTML += userRoll
//generare un numero random per il computer
computerRoll = Math.ceil(Math.random() * 6)
document.getElementById('computer').innerHTML += computerRoll

//confronta i risultati
if (userRoll > computerRoll) {
  document.getElementById('winner').innerHTML += 'You Win!!!';
  alert('You win')
} else if (userRoll < computerRoll){
  document.getElementById('winner').innerHTML += 'You lose';
  alert('You lose')
} else {
  document.getElementById('winner').innerHTML += 'I\'s a draw!'
  alert('Draw')
}

// print
console.log('your roll is: ' + userRoll);
console.log('computer roll is: ' + computerRoll);