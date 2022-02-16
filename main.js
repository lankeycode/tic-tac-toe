// Déclaration des constantes
const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const circle1 = document.querySelector('.circle1')
const circle2 = document.querySelector('.circle2')
const square = document.querySelectorAll('.square')
const start = document.querySelector('#start')
// const reset = document.querySelector('.reset')

 $buttons = $("button[id*='button_']")

// Déclaration des variables
let n1 = document.querySelector('.n1')
let n2 = document.querySelector('.n2')
let n3 = document.querySelector('.n3')
let n4 = document.querySelector('.n4')
let n5 = document.querySelector('.n5')
let n6 = document.querySelector('.n6')
let n7 = document.querySelector('.n7')
let n8 = document.querySelector('.n8')
let n9 = document.querySelector('.n9')
let playerActive = ''
let playerLeft = document.querySelector('.playerLeft')
let playerRight = document.querySelector('.playerRight')


// what is the player start
function whoStartGame() {
    return Math.floor(Math.random() * 2) + 1
}

start.addEventListener('click', () => {
    choicePlayer = whoStartGame()
    playerActive = `player${choicePlayer}`
    indicatePlayer()
})

function switchPlayer() {
     playerActive === 'player1' ? playerActive = 'player2' : playerActive = 'player1'
    indicatePlayer()
}
// Display active player
function indicatePlayer(){
    if (playerActive === 'player1'){
    player1.classList.add('activePlayer')
    circle1.classList.add('activeCircle')
    player2.classList.remove('activePlayer')
    circle2.classList.remove('activeCircle')

    } else {
    player1.classList.remove('activePlayer')
    circle1.classList.remove('activeCircle')
    player2.classList.add('activePlayer')
    circle2.classList.add('activeCircle')
    }
}

function winner() {
    // si le joueur actif forme une suite :
    // 1 - 2 - 3  ||  4 - 5 - 6 ||  7 - 8 - 9 ||  1 - 5 - 9  || 3 - 5 - 7 
    // 1 - 4 - 7  ||  2 - 5 - 8 ||  3 - 6 - 9
    // alors le joueur actif gagne
    
    if ($(" div button:first-child img:first-child" ).hasClass('imageNaruto') === true && $(" div button:nth-child(2) img:first-child" ).hasClass('imageNaruto') === true && $(" div button:nth-child(3) img:first-child" ).hasClass('imageNaruto') === true||
          $(" div button:nth-child(4) img:first-child" ).hasClass('imageNaruto') === true && $(" div button:nth-child(5) img:first-child" ).hasClass('imageNaruto') === true && $(" div button:nth-child(6) img:first-child" ).hasClass('imageNaruto') === true||
          $(" div button:nth-child(7) img:first-child" ).hasClass('imageNaruto') === true && $(" div button:nth-child(8) img:first-child" ).hasClass('imageNaruto') === true && $(" div button:last-child img:first-child" ).hasClass('imageNaruto') === true ||
          $(" div button:first-child img:first-child" ).hasClass('imageNaruto') === true && $(" div button:nth-child(5) img:first-child" ).hasClass('imageNaruto') === true && $(" div button:last-child img:first-child" ).hasClass('imageNaruto') === true ||
          $(" div button:nth-child(3) img:first-child" ).hasClass('imageNaruto') === true &&  $(" div button:nth-child(5) img:first-child" ).hasClass('imageNaruto') === true && $(" div button:nth-child(7) img:first-child" ).hasClass('imageNaruto') === true ||
          $(" div button:first-child img:first-child" ).hasClass('imageNaruto') === true && $(" div button:nth-child(4) img:first-child" ).hasClass('imageNaruto') === true &&  $(" div button:nth-child(7) img:first-child" ).hasClass('imageNaruto') === true ||
          $(" div button:nth-child(2) img:first-child" ).hasClass('imageNaruto') === true && $(" div button:nth-child(5) img:first-child" ).hasClass('imageNaruto') === true && $(" div button:nth-child(8) img:first-child" ).hasClass('imageNaruto') === true ||
          $(" div button:nth-child(3) img:first-child" ).hasClass('imageNaruto') === true && $(" div button:nth-child(6) img:first-child" ).hasClass('imageNaruto') === true && $(" div button:last-child img:first-child" ).hasClass('imageNaruto') === true ){
         playerLeft.textContent = 'WINNER'
         playerRight.textContent = 'LOSER' 
         let scoreLeft = $(".scoreLeft")
         scoreLeft.html( parseInt(scoreLeft.html()) + 1 ) 
         $buttons.prop('disabled', true) //disabled all buttons
        
     }else if ($(" div button:first-child img:first-child" ).hasClass('imagePiece') === true && $(" div button:nth-child(2) img:first-child" ).hasClass('imagePiece') === true && $(" div button:nth-child(3) img:first-child" ).hasClass('imagePiece') === true||
     $(" div button:nth-child(4) img:first-child" ).hasClass('imagePiece') === true && $(" div button:nth-child(5) img:first-child" ).hasClass('imagePiece') === true && $(" div button:nth-child(6) img:first-child" ).hasClass('imagePiece') === true||
     $(" div button:nth-child(7) img:first-child" ).hasClass('imagePiece') === true && $(" div button:nth-child(8) img:first-child" ).hasClass('imagePiece') === true && $(" div button:last-child img:first-child" ).hasClass('imagePiece') === true ||
     $(" div button:first-child img:first-child" ).hasClass('imagePiece') === true && $(" div button:nth-child(5) img:first-child" ).hasClass('imagePiece') === true && $(" div button:last-child img:first-child" ).hasClass('imagePiece') === true ||
     $(" div button:nth-child(3) img:first-child" ).hasClass('imagePiece') === true &&  $(" div button:nth-child(5) img:first-child" ).hasClass('imagePiece') === true && $(" div button:nth-child(7) img:first-child" ).hasClass('imagePiece') === true ||
     $(" div button:first-child img:first-child" ).hasClass('imagePiece') === true && $(" div button:nth-child(4) img:first-child" ).hasClass('imagPieceo') === true &&  $(" div button:nth-child(7) img:first-child" ).hasClass('imagePiece') === true ||
     $(" div button:nth-child(2) img:first-child" ).hasClass('imagePiece') === true && $(" div button:nth-child(5) img:first-child" ).hasClass('imagePiece') === true && $(" div button:nth-child(8) img:first-child" ).hasClass('imagePiece') === true ||
     $(" div button:nth-child(3) img:first-child" ).hasClass('imagePiece') === true && $(" div button:nth-child(6) img:first-child" ).hasClass('imagePiece') === true && $(" div button:last-child img:first-child" ).hasClass('imagePiece') === true ){
        playerLeft.textContent = 'LOSER'
        playerRight.textContent = 'WINNER'
        let scoreRight = $(".scoreRight")
        scoreRight.html( parseInt(scoreRight.html()) + 1 )
        $buttons.prop('disabled', true) //disabled all buttons
    }
    newGame()
}
// display image of game
$buttons.click(function ()  { 
  
    if (playerActive === 'player1'){
    $(this).prepend('<img class="imageNaruto imageLogo" src="./img/naruto-logo.png" style="height: 120px;" alt="personnage naruto">1</img>')

} else if (playerActive === 'player2') {
    $(this).prepend('<img class="imagePiece imageLogo" src="./img/one-piece-logo.png" style="height: 120px;" alt="personnage naruto">2</img>')
  }
  $(this).css("cursor" , "none")
  $(".imageLogo").addClass("animate") 
  
    indicatePlayer()
    switchPlayer()
    winner()
    $(this).prop('disabled', true) // disable cliked button 
}) 
// reset
$("#reset").click( () => {
    player1.classList.remove('activePlayer')
    circle1.classList.remove('activeCircle')
    player2.classList.remove('activePlayer')
    circle2.classList.remove('activeCircle')
    playerLeft.textContent = ''
    playerRight.textContent = ''
    $(".imageLogo").remove()
    $(".square").css("cursor" , "pointer") 
    $buttons.prop('disabled', false) //enable all buttons
    })



  