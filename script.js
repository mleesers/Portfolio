view_port= document.querySelector("view-port");
images=document.querySelector("images-container");
card_width = parseFloat(getComputedStyle(images.children[0]).width);
let new_width = 0.0;

numberCards = images.children.length - 1;
middleCard = Math.floor(numberCards/2);


let img_width = 50;
img = window.innerwidth < 768 ? 100 : img_width;

new_width = 
/Android|webOS|iPhone|iPad|iPod|Blackberry|IEMobile|Opera MIni/i.test(navigator.userAgent) ?
(img_width / 100) * screen.width:
(img_width / 100) * window.innerWidth;

view_port.style.width = `${new_width}px`




function orderCards(){
    let counterRight = 1;
    let counterLeft = middleCard;
    for(i=0;i<images.children.length;i++){
        images.children[i].style.transitionDuration = '3.0s';
        if(i<middleCard){
            images.children[i].style.left = `-${(counterLeft*card_width) - (new_width/2)}px`
            counterLeft--;
        }else if(i>middleCard){
            images.children[i].style.left = `${(counterRight*card_width) + (new_width/2)}px`
            counterRight++;
        }else{
            images.children[i].style.left = `${new_width/2}px`
        }
    }
}
order_cards();