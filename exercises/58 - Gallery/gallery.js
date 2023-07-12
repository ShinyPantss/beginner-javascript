function Gallery(gallery) {
  if (!gallery) {
    throw new Error("No Gallery");
  }
  this.gallery = gallery;
  this.images = Array.from(gallery.querySelectorAll("img"));

  this.modal = document.querySelector(".modal");
  this.prevButton = this.modal.querySelector(".prev");
  this.nextButton = this.modal.querySelector(".next");
  
  console.log(this.modal)

  function openModal() {
    console.log("Opening Modal...");
    if (this.modal.matches(".open")) {
      console.log("Modal opened already");
      return;
    }
    this.modal.classList.add("open");
    this.modal.addEventListener("click", handleClickOutside);

    window.addEventListener("keyup", handleKeyUp);
    this.nextButton.addEventListener("click", nextButtonImage);
    this.prevButton.addEventListener("click", nextButtonImage);
  }
  function closeModal() {
    this.modal.classList.remove("open");
    this.modal.addEventListener("click", handleClickOutside);
    window.removeEventListener("keyup", handleKeyUp);
    this.nextButton.removeEventListener("click", nextButtonImage);
    this.prevButton.removeEventListener("click", prevButtonImage);
  }
  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }
  function handleKeyUp(e) {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") nextButtonImage();
    if (e.key === "ArrowLeft") prevButtonImage();
  }
  function prevButtonImage() {
    console.log(this.currentImage);

    showImage(this.currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function nextButtonImage() {
    console.log(this.currentImage);

    showImage(this.currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showImage(el) {
    if (!el) {
      console.info("no image to show");
      return;
    }
    this.modal.querySelector("img").src = el.src;
    this.modal.querySelector("h2").textContent = el.title;
    this.modal.querySelector("figure p").textContent = el.dataset.description;
    this.currentImage = el;
    openModal();
    console.log(el);
  }

  function handleImageClick(event) {
    showImage(event.currentTarget);
  }
  this.images.forEach((image) =>
    image.addEventListener("click", handleImageClick)
  );

  this.images.forEach((image) => {
    image.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        showImage(e.currentTarget);
      }
    });
  });
}

const gallery1 = new Gallery(document.querySelector(".gallery1"));

const gallery2 = new Gallery(document.querySelector(".gallery2"));
console.log(gallery1, gallery2);
