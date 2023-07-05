const item = document.querySelector('.item');

const src = `https://picsum.photos/500`;
const desc = `cute pup`;
const myHTML = `
<div class="wrapper">
<h2> ${desc}</h2>
<img src="${src}" alt="${desc}"/>
</div>
`



const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);

document.body.appendChild(myFragment);