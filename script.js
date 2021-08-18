const next = document.getElementById('next');
const prev = document.getElementById('prev');
const images = document.querySelector('.images-container');

const first_card = images.children[0].cloneNode(true);
const last_card = images.children[images.children.length-1].cloneNode(true);

images.insertBefore(last_card,images.children[0]);
images.appendChild(first_card);

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