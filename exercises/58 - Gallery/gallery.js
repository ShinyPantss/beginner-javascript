function Gallery(gallery) {
  if (!gallery) {
    throw new Error("No Gallery");
  }

  const images = Array.from(gallery.querySelectorAll("img"));

  const modal = document.querySelector(".modal");
  const prevButton = modal.querySelector(".prev");
  const nextButton = modal.querySelector(".next");

  function showImage(el) {
    if (!el) {
      console.info("no image to show");
      return;
    }

    console.log(el);
  }
  function handleImageClick(event) {
    showImage(event.currentTarget);
  }
  images.forEach((image) => image.addEventListener("click", handleImageClick));
}

const gallery1 = Gallery(document.querySelector(".gallery1"));

const gallery2 = Gallery(document.querySelector(".gallery2"));
