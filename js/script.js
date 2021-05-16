function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
    printMessage ('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}
}
function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if(argComputerMove == argPlayerMove) {
        return printMessage ('Remis!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      printMessage('Tym razem przegrywasz :(');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Tym razem przegrywasz :(');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Tym razem przegrywasz :(');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    }
  }
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
  computerMove = 'kamień';
}

printMessage('Mój ruch to: ' + computerMove);

if(randomNumber == 2){
  computerMove = 'papier';
}

printMessage('Mój ruch to: ' + computerMove);

if(randomNumber == 3){
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);  */


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/* if(playerInput == '1'){
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
printMessage('Twój ruch to: ' + playerMove); */

console.log('moves:', argComputerMove, argPlayerMove);
let Result = displayResult (argComputerMove, argPlayerMove);
console.log ('Wynik Gry:' + Result);