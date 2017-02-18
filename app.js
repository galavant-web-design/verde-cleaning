var currentImage = 1;
var images = document.querySelectorAll(".carousel .image");
var numberOfImages = images.length


function updateCarousel() {
  images[(currentImage - 1) % numberOfImages].classList.remove("old");
  images[currentImage % numberOfImages].classList.add("old");
  images[currentImage % numberOfImages].classList.remove("current");
  images[(currentImage + 1) % numberOfImages].classList.add("current");

  currentImage = currentImage + 1;
}

setInterval(updateCarousel, 10000);

addListenersForAction("show");
addListenersForAction("hide");

function addListenersForAction(action) {
  document.querySelectorAll("[data-" + action + "]").forEach(function (hideToggle) {
    hideToggle.addEventListener("click", function (event) {
      event.preventDefault();
      
      var target = hideToggle.getAttribute("data-" + action);
      toggleShow(target);
      toggleMoreInfo(target);
    });
  });
}

function toggleShow(target) {
  document.querySelectorAll("[data-show=" + target + "]").forEach(function (showToggle) {
    showToggle.classList.toggle("hidden");
  });
}

function toggleMoreInfo(target) {
  document.querySelectorAll("[data-more-info=" + target + "]").forEach(function (moreInfo) {
    moreInfo.classList.toggle("hidden");
  });
}
