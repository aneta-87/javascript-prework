function playGame(playerInput) {
  playGame(3) clearMessages () {
    const playerInput = nożyce;
  }
  function getMoveName(MoveId) {
    if (MoveId == 1) {
      return 'kamień';
    } else if (MoveId == 2) {
      return 'papier';
    } else if (MoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + MoveId + '.');
      return 'nieznany ruch';
    }
  }
  function displayResult(ComputerMove, PlayerMove) {
    printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);
    if (ComputerMove == PlayerMove) {
      return printMessage('Remis!');
    } else if (ComputerMove == 'kamień' && PlayerMove == 'papier') {
      printMessage('Ty wygrywasz!');
    } else if (ComputerMove == 'kamień' && PlayerMove == 'nożyce') {
      printMessage('Tym razem przegrywasz :(');
    } else if (ComputerMove == 'papier' && PlayerMove == 'nożyce') {
      printMessage('Ty wygrywasz!');
    } else if (ComputerMove == 'papier' && PlayerMove == 'kamień') {
      printMessage('Tym razem przegrywasz :(');
    } else if (ComputerMove == 'nożyce' && PlayerMove == 'papier') {
      printMessage('Tym razem przegrywasz :(');
    } else if (ComputerMove == 'nożyce' && PlayerMove == 'kamień') {
      printMessage('Ty wygrywasz!');
    }
  }
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let ComputerMove = getMoveName(randomNumber);

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
  let PlayerMove = getMoveName(playerInput);

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

  console.log('moves:', ComputerMove, PlayerMove);
  let Result = displayResult(ComputerMove, PlayerMove);
  console.log('Wynik Gry:' + Result);

  
  document.getElementById('papier').addEventListener('click', function(2){
    printMessage('Guzik został kliknięty');
  });
  document.getElementById('kamień').addEventListener('click', function(1){
    printMessage('Guzik został kliknięty');
  });
  document.getElementById('nożyce').addEventListener('click', function(3){
    printMessage('Guzik został kliknięty');
  });
  function displayResult(){
    PlayerResult.innerHTML = 'Wynik gracza: ' + scores.player;
    ComputerResult.innerHTML = 'Wynik komputera: ' + scores.computer;
}
playGame(3);