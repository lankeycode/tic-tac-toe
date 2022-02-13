// Déclaration des constantes
const mouse =document.querySelector('.mouse')
const containerImgOne = document.querySelector('.containerImgOne')
const containerImgTwo = document.querySelector('.containerImgTwo')
const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const circle1 = document.querySelector('.circle1')
const circle2 = document.querySelector('.circle2')
const square = document.querySelectorAll('.square')
const bigImg = document.querySelector('.bigImg')
const smallImg = document.querySelector('.smallImg')
const start = document.querySelector('.start')
const reset = document.querySelector('.reset')

// Déclaration des variables
let number1 = ''  
let number2 = '' 
let number3 = ''
let number4 = ''
let number5 = ''
let number6 = ''
let number7 = ''
let number8 = ''
let number9 = ''
let number = ''
let playerActive = ''
let playerLeft = document.querySelector('.playerLeft')
let playerRight = document.querySelector('.playerRight')

window.addEventListener('mousemove', (e) => {
    mouse.style.left = e.pageX + 'px'
    mouse.style.top = e.pageY + 'px'
})

// Choisir son theme de jeu


// Savoir quel joueur commence
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
    if ((number1 === 'player1' && number2 === 'player1' && number3 === 'player1') || 
     ( number4 === 'player1' && number5 === 'player1' && number6 === 'player1') ||
     ( number7 === 'player1' && number8 === 'player1' && number9 === 'player1')||
     ( number1 === 'player1' && number5 ==='player1' && number9 === 'player1')||
     (number3 === 'player1' && number5 === 'player1' && number7 === 'player1')||
     (number1 === 'player1' && number4 === 'player1' && number7 === 'player1')||
     (number2 === 'player1' && number5 === 'player1' && number8 === 'player1')||
     (number3 === 'player1' && number6 === 'player1' && number9 === 'player1')) {
         playerLeft.textContent = 'WINNER'
         playerRight.textContent = 'LOSER'    
        
    } else if((number1 === 'player2' && number2 === 'player2' && number3 === 'player2') || 
    ( number4 === 'player2' && number5 === 'player2' && number6 === 'player2') ||
    ( number7 === 'player2' && number8 === 'player2' && number9 === 'player2')||
    ( number1 === 'player2' && number5 ==='player2' && number9 === 'player2')||
    (number3 === 'player2' && number5 === 'player2' && number7 === 'player2')||
    (number1 === 'player2' && number4 === 'playe21' && number7 === 'player2')||
    (number2 === 'player2' && number5 === 'player2' && number8 === 'player2')||
    (number3 === 'player2' && number6 === 'player2' && number9 === 'player2')) {
        playerLeft.textContent = 'LOSER'
        playerRight.textContent = 'WINNER'
    }
}
// empecher de cliquer 2 fois sur une meme case

$.test1 = $(".n1").one("click",function()  { 
     
      if (playerActive === 'player1'){

  $(".n1").prepend('<img class="imageLogo" src="./img/naruto-logo.png" style="height: 120px;" alt="personnage naruto"></img>')

  } else if (playerActive === 'player2') {

  $(".n1").prepend('<img class="imageLogo" src="./img/one-piece.png" style="height: 120px;" alt="personnage naruto"></img>')
}
$(".n1").css("cursor" , "none")

 number1 = playerActive
    indicatePlayer()
    switchPlayer()
    winner()   
})

$(".n2").one("click",function()  { 
     
    if (playerActive === 'player1'){

    $(".n2").prepend('<img class="imageLogo" src="./img/naruto-logo.png" style="height: 120px;" alt="personnage naruto"></img>')

} else if (playerActive === 'player2') {
    $(".n2").prepend('<img class="imageLogo" src="./img/one-piece-logo.png" style="height: 120px;" alt="personnage naruto"></img>')
  }
  $(".n2").css("cursor" , "none")  
  
  number2 = playerActive     
    indicatePlayer()
    switchPlayer()
    winner()     
})

$(".n3").one("click",function()  { 
     
    if (playerActive === 'player1'){

    $(".n3").prepend('<img class="imageLogo" src="./img/naruto-logo.png" style="height: 120px;" alt="personnage naruto"></img>')

} else if (playerActive === 'player2') {
    $(".n3").prepend('<img class="imageLogo" src="./img/one-piece-logo.png" style="height: 120px;" alt="personnage naruto"></img>')
}
$(".n3").css("cursor" , "none")

number3 = playerActive
    indicatePlayer()
    switchPlayer()
    winner()
})

$(".n4").one("click",function()  { 
     
    if (playerActive === 'player1'){

    $(".n4").prepend('<img class="imageLogo" src="./img/naruto-logo.png" style="height: 120px;" alt="personnage naruto"></img>')

} else if (playerActive === 'player2') {
    $(".n4").prepend('<img class="imageLogo" src="./img/one-piece-logo.png" style="height: 120px;" alt="personnage naruto"></img>')
  }
  $(".n4").css("cursor" , "none") 
  number4 = playerActive
    
    indicatePlayer()
    switchPlayer()
    winner()
})

$(".n5").one("click",function()  { 
     
    if (playerActive === 'player1'){

    $(".n5").prepend('<img class="imageLogo" src="./img/naruto-logo.png" style="height: 120px;" alt="personnage naruto"></img>')

} else if (playerActive === 'player2') {
    $(".n5").prepend('<img class="imageLogo" src="./img/one-piece-logo.png" style="height: 120px;" alt="personnage naruto"></img>')
  }
  $(".n5").css("cursor" , "none")
  number5 = playerActive
        
    indicatePlayer()
    switchPlayer()
    winner()
})

$(".n6").one("click",function()  { 
     
    if (playerActive === 'player1'){

    $(".n6").prepend('<img class="imageLogo" src="./img/naruto-logo.png" style="height: 120px;" alt="personnage naruto"></img>')

} else if (playerActive === 'player2') {
    $(".n6").prepend('<img class="imageLogo" src="./img/one-piece-logo.png" style="height: 120px;" alt="personnage naruto"></img>')
  }
  $(".n6").css("cursor" , "none")
   
  number6 = playerActive
  
    indicatePlayer()
    switchPlayer()
    winner()
})

$(".n7").one("click",function()  { 
     
    if (playerActive === 'player1'){

    $(".n7").prepend('<img class="imageLogo" src="./img/naruto-logo.png" style="height: 120px;" alt="personnage naruto"></img>')

} else if (playerActive === 'player2') {
    $(".n7").prepend('<img class="imageLogo" src="./img/one-piece-logo.png" style="height: 120px;" alt="personnage naruto"></img>')
  }
  $(".n7").css("cursor" , "none") 
  number7 = playerActive
     
    indicatePlayer()
    switchPlayer()
    winner()
})

$(".n8").one("click",function()  { 
     
    if (playerActive === 'player1'){

    $(".n8").prepend('<img class="imageLogo" src="./img/naruto-logo.png" style="height: 120px;" alt="personnage naruto"></img>')

} else if (playerActive === 'player2') {
    $(".n8").prepend('<img class="imageLogo" src="./img/one-piece-logo.png" style="height: 120px;" alt="personnage naruto"></img>')
  }
  $(".n8").css("cursor" , "none")
  number8 = playerActive
  
    indicatePlayer()
    switchPlayer()
    winner()
})

$(".n9").one ("click",function()  { 
    if (playerActive === 'player1'){

    $(".n9").prepend('<img class="imageLogo" src="./img/naruto-logo.png" style="height: 120px;" alt="personnage naruto"></img>')

} else if (playerActive === 'player2') {
    $(".n9").prepend('<img class="imageLogo" src="./img/one-piece-logo.png" style="height: 120px;" alt="personnage naruto"></img>')
  }
  $(".n9").css("cursor" , "none") 
  number9 = playerActive

    indicatePlayer()
    switchPlayer()
    winner()
}) 

// reset
reset.addEventListener('click', () => {
    player1.classList.remove('activePlayer')
    circle1.classList.remove('activeCircle')
    player2.classList.remove('activePlayer')
    circle2.classList.remove('activeCircle')
    playerLeft.textContent = ''
    playerRight.textContent = ''
    $(".imageLogo").remove()
    $(".square").css("cursor" , "pointer")  
    location.reload()
})

$(document).ready(function () {
   
})

$("img").click(function() {
    $(this).addClass("active2")
  })

  