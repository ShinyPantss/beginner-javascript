function wait(ms = 0) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

function getRandomBetween(min = 20, max = 150) {
  return Math.floor(Math.random() * (max - min));
}

// async function draw(el) {
//   const text = el.textContent;
//   let soFar = "";
//   for (const letter of text) {
//     soFar += letter;
//     console.log(soFar);
//     const { typeMin, typeMax } = el.dataset;
//     console.log(el.dataset);
//     el.textContent = soFar;
//     const amountofTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountofTimeToWait);
//   }
// }

function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;

  async function drawLetter() {
    el.textContent = text.slice(0, index);
    console.log(el.textContent);
    index += 1;
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTimeToWait);
    if (index <= text.length) {
        drawLetter();
    }
  }
  drawLetter();
}

document.querySelectorAll("[data-type]").forEach(draw);
