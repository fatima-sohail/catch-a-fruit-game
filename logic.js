//we want to move basket horizontally using keyboard keys
let basket = document.getElementById('basket')

function left(){
    basket.style.left = '40%'
}
basket.addEventListener('keydown', left)
