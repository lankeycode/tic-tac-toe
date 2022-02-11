// Déclaration des constantes
const containerImgOne = document.querySelector('.containerImgOne')
const containerImgTwo = document.querySelector('.containerImgTwo')
let player = document.querySelector('.player')
let one = document.querySelector('.one')
let two = document.querySelector('.two')
const n1 = document.querySelector('.n1')
const n2 = document.querySelector('.n2')
const n3 = document.querySelector('.n3')
const n4 = document.querySelector('.n4')
const n5 = document.querySelector('.n5')
const n6 = document.querySelector('.n6')
const n7 = document.querySelector('.n7')
const n8 = document.querySelector('.n8')
const n9 = document.querySelector('.n9')

const bigImg = document.querySelector('.bigImg')
const smallImg = document.querySelector('.smallImg')

const start = document.querySelector('.start')
const reset = document.querySelector('.reset')



// Déclaration des variables
let player1 = 1
let player2 = 2
let playerActive;


// Choisir son theme de jeu


// Savoir quel joueur commence
function whoStartGame() {
    return Math.floor(Math.random() * 2) + 1

}
// start.addEventListener('click', () => {
//     playerActive = whoStartGame()
//     playerActive == 1 ? player1 : playerActive == 2 ? player2 : player1
//     console.log(player1);

// })

function switchPlayer() {
    // playerActive = playerActive == player1 ? player2 : player1
    if (playerActive == 1)
        playerActive = player1 

        else if
            (playerActive == 2)
            playerActive = player2

         else
            playerActive = player1

        
    

    
    player1.classList.toggle('activePlayer')
    // player.classList.toggle('activePlayer')
    // player2.classList.toggle('activePlayer')
    

}


// function showImg() {
//   let img = document.createElement('img')
//   img.setAttribute('class', 'smallImgAdd')
//   img.src = './img/adidas-logo1.png'
//   document.querySelector('.n6').appendChild(img)
     
// }


function winner() {

}



n1.addEventListener('click', () => {
    smallImg.classList.add('active')
    showImg()
    switchPlayer()

})
n2.addEventListener('click', () => {
    
    switchPlayer()
    
    

})
n3.addEventListener('click', () => {
    n3.style.backgroundColor = 'blue'
    switchPlayer()

})
n4.addEventListener('click', () => {
    n4.style.backgroundColor = 'blue'
    switchPlayer()

})
n5.addEventListener('click', () => {
    n5.style.backgroundColor = 'blue'
    switchPlayer()

})
n6.addEventListener('click', () => {
    n6.style.backgroundColor = 'blue'
    switchPlayer()

})
n7.addEventListener('click', () => {
    n7.style.backgroundColor = 'blue'
    switchPlayer()

})
n8.addEventListener('click', () => {
    n8.style.backgroundColor = 'blue'
    switchPlayer()

})
n9.addEventListener('click', () => {
    n9.style.backgroundColor = 'blue'
    switchPlayer()



})



// reset

reset.addEventListener('click', () => {


})