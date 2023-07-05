const myParagraph = document.createElement('p');

myParagraph.textContent = 'I am a P';

myParagraph.classList.add('special');

console.log(myParagraph);



const myImage = document.createElement('img');
myImage.src = 'http://picsum.photos/500';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);


myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);


const heading = document.createElement('h2');
heading.textContent = 'Cool things';

myDiv.insertAdjacentElement('afterbegin', heading);

const myList = document.createElement('ul');


for(let i= 0 ; i < 5 ; i++){
    const myItem = document.createElement('li');
    myItem.textContent = `Item ${i}`;
    myList.appendChild(myItem);
}
console.log(myList);

myDiv.insertAdjacentElement('afterend', myList);