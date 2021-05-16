let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

printMessage('Twój ruch to: ' + playerMove);

if(playerInput == '2'){
  playerMove = 'papier';
}

printMessage('Twój ruch to: ' + playerMove);

if(playerInput == '3'){
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);