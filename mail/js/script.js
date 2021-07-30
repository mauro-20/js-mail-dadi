// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.;

// input
var emails = ['gino@gmail.com', 'stellina@hotmail.it', 'luca@pixar.net', 'giuseppe@libero.it', 'papera@boolean.com'];
var userEmail = prompt('inserisci la tua email');

// compute
var isLogged = false
for (var i = 0; i < emails.length; i++) {
  if (userEmail == emails[i]) {
    isLogged = true
  } 
}

// print
if (isLogged) {
  alert('accesso effettuato')
} else {
  alert('la tua email non è presente, devi registrarti per accedere')
}
