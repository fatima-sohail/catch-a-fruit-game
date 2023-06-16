//we want to move basket horizontally using keyboard keys

let currentPosition;
let horizontalMovement = function horizontalMovement(event) {
    let basket = document.getElementById('basket')
    // currentPosition = parseInt(basket.style.left) ;
    if (event.key === 'ArrowLeft') {
        // Move the basket to the left
        currentPosition -= 10;
    } else if (event.key === 'ArrowRight') {
        // Move the basket to the right
        currentPosition += 10;
    }
    //Basket goes out of screen width, continues to go left and right
    //to keep the basket within screen view
    var screenWidth = window.innerWidth
    var divWidth = basket.offsetWidth

    
    if(currentPosition <divWidth/2){
        currentPosition = (divWidth/2);
    }else if(currentPosition + (divWidth/2) > screenWidth){
        currentPosition = screenWidth-(divWidth/2)
    }

    //update position of the basket
    basket.style.left = currentPosition + 'px'
}

let initialSetup = function initialSetup(){
    currentPosition = window.innerWidth / 2
}
//create eventListener on element
//eventListener needs an event to trigger function when left key is pressed on the keyboard
//that event is called 'onkeydown' 
document.addEventListener('keydown', horizontalMovement)
document.addEventListener('DOMContentLoaded', initialSetup)

//we want to drop the first fruit vertically
function fallFruit(){
    var fruit = document.getElementById('fruit1')
    fruit.style.animation = 'fruitFallAnimation 3s'; //binds animation on button 
    fruit.style.animationPlayState = 'running';
}

//when the fruit collides with the basket, that's +1 point





