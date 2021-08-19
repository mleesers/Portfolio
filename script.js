var slidePosition = 1;
SlideShow(slidePosition);
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const images = document.querySelector('.images-container');

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}
const first_card = images.children[0].cloneNode(true);
const last_card = images.children[images.children.length-1].cloneNode(true);

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}
images.insertBefore(last_card,images.children[0]);
images.appendChild(first_card);

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}  
images.style.transitionDuration = "0.0s";
images.style.transform = `translate(-500px )`

let current_card = 1;

next.addEventListener('click', () => {
    if(current_card < images.children.length - 1) {
        current_card++;
        images.style.transitionDuration = "0.5s";
        images.style.transform = `translate(-${current_card * 500}px )`

        if(current_card === images.children.length - 1) {
            setTimeout(() => {
                images.style.transitionDuration = "0.0s";
                images.style.transform = `translate(-500px )`;
                current_card = 1;
            },600);

        }
    }else{
        return;
    }
})
prev.addEventListener('click', () => {
    if(current_card > 1) {
        current_card--;
        images.style.transitionDuration = ".5s";
        images.style.transform = `translate(-${current_card * 500}px )`
        if(current_card === 0) {
            setTimeout(() => {
                images.style.transitionDuration = "0.0s";
                images.style.transform = `translate(-${(images.children.length-2) * 500}px)`;
                current_card = images.children.length - 2;
            },600);
        }
    }else{
        return;
    }

}) 