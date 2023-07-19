function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function ask(options) {
  return new Promise(async function (resolve) {
    const popup = document.createElement("form");
    popup.classList.add("popup");
    popup.insertAdjacentHTML(
      "afterbegin",
      `
        <fieldset>
            <label>${options.title}</label>
            <input type="text" name="input"/>
            <button type="submit">Submit</button>
            
        </fieldset>
        `
    );
   

    if (options.cancel) {
      const skipButton = document.createElement("button");
      skipButton.textContent = "Cancel";
      skipButton.type = "button";
      popup.firstElementChild.appendChild(skipButton);
      skipButton.addEventListener(
        "click",
        function (e) {
          
          popup.remove();
          resolve(null);
          console.log(e);
        },
        { once: true }
      );
    }
    popup.addEventListener("submit", function (e) {
        const input = popup.input.value;
       e.preventDefault();
        resolve(input);
        popup.remove();
    },{});
    document.body.appendChild(popup);
    await wait(50);
    popup.classList.add("open");
  });
}
async function labeledAndPop(e) {
  const button = e.currentTarget;
  const cancel = button.hasAttribute("data-cancel");
  const answer = await ask({ title: button.dataset.question, cancel });
  console.log(answer);
}

const buttons = document.querySelectorAll("[data-question]");
buttons.forEach((button) => button.addEventListener("click", labeledAndPop));
