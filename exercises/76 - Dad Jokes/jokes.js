const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

const jokeButton = document.querySelector('.getJoke');

const jokeParagraph = document.querySelector('.joke p');




async function fetchJoke(){

  const response = await fetch("https://icanhazdadjoke.com",{
    headers: {
      Accept: 'application/json',
    },
  })
  const data =  await response.json();

  return data
}
function changeJoke(joke){
  jokeParagraph.textContent = joke

}
async function changeButton(){
  const randomButtonText =  buttonText[Math.floor(Math.random() * buttonText.length)]
  console.log(randomButtonText)
  if (jokeParagraph.textContent ===  randomButtonText)
  return changeButton()
  else{
    jokeButton.textContent = randomButtonText
    const joke =  await fetchJoke()
  changeJoke(joke.joke)
  }
  
}
jokeButton.addEventListener("click", changeButton)
