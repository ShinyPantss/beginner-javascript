const terms = document.querySelector(".terms-and-conditions");
const watch = document.querySelector(".watch");
const button = document.querySelector(".accept");

function obCallBack(payload) {
    
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
  }
  else{
      button.disabled = true;
  }
}
const ob = new IntersectionObserver(obCallBack,{root: terms, threshold: 1});

ob.observe(terms.lastElementChild);
