// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');



// add three list items with the words "one, two, three" in them
li1.textContent = 'one';
li2.textContent = 'two';
li3.textContent = 'three';
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

// put that list into the above wrapper
div.appendChild(ul);
// create an imageş
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
const  img = document.createElement('img');
img.src = 'https://picsum.photos/500';
img.width = 250;
img.classList.add('cute');
img.alt = 'Cute Puppy';
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it

const myHTML = `<div> 
<p>Paragraph One </p>
<p>Paragraph Two </p>
</div>`
ulElement = document.createElement('ul');
// put this div before the unordered list from above
ul.insertAdjacentHTML('afterbegin', myHTML);


// add a class to the second paragraph called warning
document.body.firstElementChild.children[1].classList.add('warning');
// remove the first paragraph
const firstP = document.querySelector(".warning");
firstP.previousElementSibling.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name,age,height){
    const html = `
    <div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
    <button class="delete" type="button">  Delete</button>
    </div>
    `;
    return html;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
cards.insertAdjacentHTML("afterbegin",generatePlayerCard('wes',12,150));
cards.insertAdjacentHTML("afterbegin",generatePlayerCard("kas",14,160));
cards.insertAdjacentHTML("afterbegin",generatePlayerCard("kaz",16,170));
cards.insertAdjacentHTML("afterbegin",generatePlayerCard("kat",18,180));



// make 4 player cards using generatePlayerCard

// append those cards to the div

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement("beforebegin",cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
function deleteCard(event){

}
// make out delete function
function deleteCard(){
    const buttonClicked =  document.querySelector('.playerCard');
    buttonClicked.remove();

}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click',deleteCard));