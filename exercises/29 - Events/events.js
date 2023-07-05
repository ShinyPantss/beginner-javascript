const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
    console.log('it got clicked');
}

butts.addEventListener('click', handleClick,);

coolButton.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);

const buttons = document.querySelectorAll('.buy');
console.log(buttons)

function handleBuyButtonClick(event){
// console.log('you clicked it');
// console.log(event.target.dataset.price);

console.log(event.target);
console.log(event.currentTarget);
console.log(event.target === event.currentTarget);
// event.stopPropagation();
}
buttons.forEach(function(buyButton){
    buyButton.addEventListener('click', handleBuyButtonClick);
});
window.addEventListener('click', function(event){
    console.log('you clicked the window');
    console.log(event.target);
    console.log(event.type);
    // event.stopPropagation();
    console.log(event.bubbles);
})
// function buyItem(){
//     console.log('you clicked it');
// }
// buttons.forEach(button => button.addEventListener('click', buyItem));