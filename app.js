var currentImage = 1;
var images = document.querySelectorAll('.carousel .image');
var numberOfImages = images.length


function updateCarousel() {
  images[(currentImage - 1) % numberOfImages].classList.remove("old");
  images[currentImage % numberOfImages].classList.add("old");
  images[currentImage % numberOfImages].classList.remove("current");
  images[(currentImage + 1) % numberOfImages].classList.add("current");

  currentImage = currentImage + 1;
}

setInterval(updateCarousel, 10000);
