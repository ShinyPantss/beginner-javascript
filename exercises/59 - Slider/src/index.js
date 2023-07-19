function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error("No slider passed in");
  }
  let current;
  let prev;
  let next;

  const slides = slider.querySelector(".slides");
  console.log(slides);

  const prevButton = slider.querySelector(".goToPrev");
  const nextButton = slider.querySelector(".goToNext");

  function handleKeyDown(e) {

    if (e.key === "ArrowRight") {
      nextButton.click();
    }
    if (e.key === "ArrowLeft") {
      prevButton.click();
    }
  }
  function startSlider() {
    current = slider.querySelector(".current") || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }
  function applyClasses() {
    current.classList.add("current");
    prev.classList.add("prev");
    next.classList.add("next");
  }
  
  
  function move(direction) {
   /* current = current.nextElementSibling || slides.firstElementChild;
    current.classList.add("current");
    current.classList.remove("next");
    prev.classList.remove("prev");

    prev = current.previousElementSibling || slides.lastElementChild;
    prev.classList.remove("current");
    prev.classList.add("prev");
    
    next = current.nextElementSibling || slides.firstElementChild;
    next.classList.add("next");
    -- Bu benim Cozumum !!!!
    */

    // Hocanin cozumu
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if (direction === 'back') {
      // make an new array of the new values, and destructure them over and into the prev, current and next variables
      [prev, current, next] = [
        // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        // get the next slide, or if it's at the end, loop around and grab the first slide
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    console.log(next);
    applyClasses();
  }
  prevButton.addEventListener("click", () => move("back"));
  nextButton.addEventListener("click", move);

 startSlider();
 applyClasses();


   
  
  
}

const mySlider = Slider(document.querySelector(".slider"));
const dogSlider = Slider(document.querySelector(".dog-slider"));

console.log(mySlider, dogSlider);