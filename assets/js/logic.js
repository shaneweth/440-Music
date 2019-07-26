const images = document.querySelectorAll(".gallery-item");

let timmer = setInterval(cycleImage, 10000);

// Will always stay the same
const length = images.length;
// Will increment by one everytime the function is called.
let imageCounter = images.length;
// e.g. 3 % 3 = 0, 4 % 3 = 1, 5 % 3 = 2, etc.
// loops through the array like this, using the remainder as the index number

function cycleImage() {
  //the new item in the array shown
  let newIndex = imageCounter % length;
  //the previous item in the array
  let lastIndex = 0;
  newIndex === 0 ? lastIndex = length - 1 : lastIndex = newIndex - 1;
  //the item before lastIndex
  //moves it back to rest on the right side
  let moveIndexRight = 0;
  lastIndex === 0 ? moveIndexRight = length - 1 : moveIndexRight = lastIndex - 1;
  images[newIndex].classList.add("showcase-img");
  images[lastIndex].classList.remove("showcase-img");
  images[lastIndex].classList.add("showcase-left");
  images[moveIndexRight].classList.remove("showcase-left");
  imageCounter++;
}

cycleImage();