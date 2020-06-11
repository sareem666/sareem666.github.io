    let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft=document.querySelector('#arrow-left'),
    arrowRight=document.querySelector('#arrow-right'),
    current=0;
    var time = 1000;
    
//Clear all images
function  reset(){
       for(let i=0; i < sliderImages.length; i++){
       sliderImages[i].style.display = 'none';
       
    }
}
//Init Slider
function startSlide(){
    reset();
    sliderImages[0].style.display='block';    
}


// Show prev
function slideLeft(){
    reset();
    sliderImages[current -1].style.display='block'
         current--;  
}
//Show next
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}
// left arrow click
arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});
//Right arrow click

arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length-1){
        current = -1
    }
    slideRight();
});
//image auto chnage
function changeImg(){
    document.slide.src = sliderImages[i];
    if(i<sliderImages.length -1){
        i++
    }else{
        i=0;
    }
    setTimeout("changeImg()",time);
    }


startSlide();
window.onload=changeImg;
//Modal Pop-Up
document.getElementById('button-1').addEventListener('click',function(){
  document.querySelector('.bg-modal').style.display='flex';
});

//Modal Close 
document.getElementById('close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display='none';
});
