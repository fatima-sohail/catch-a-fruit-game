//we want to move basket horizontally using keyboard keys

let currentPosition = window.innerWidth / 2
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

    if(currentPosition < 0){
        currentPosition = 0;
    }else if(currentPosition + divWidth > screenWidth){
        currentPosition = screenWidth-divWidth
    }

    //update position of the basket
    basket.style.left = currentPosition + 'px'
}
//create eventListener on element
//eventListener needs an event to trigger function when left key is pressed on the keyboard
//that event is called 'onkeydown' 
document.addEventListener('keydown', horizontalMovement)




