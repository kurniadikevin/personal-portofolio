//hover caption for stack icon
const icon= document.querySelectorAll('#stack-icon');
const iconCaption = document.querySelectorAll('.caption');
for(let i=0; i< icon.length; i++){
    icon[i].addEventListener('mouseover',()=>{
        iconCaption[i].style.display='inline';
    })
    icon[i].addEventListener('mouseleave',()=>{
        iconCaption[i].style.display='none';
    })
}

// slideshow script
/* const projectBox= document.querySelectorAll('.project-box');
let currentSliceIndex = 0;

const showSlice=(i)=>{
    projectBox[i].style.display='block';
    if(i>0){
    projectBox[i-1].style.display='none';
    } else if( i === 0) {
        projectBox[9].style.display='none';
    }
}

//for backward slice
const removeSliceBackward =(i)=>{
    projectBox[i].style.display='none';
}

showSlice(currentSliceIndex);
 */
/* setInterval(function(){
    currentSliceIndex++;
    if(currentSliceIndex === 10){
        currentSliceIndex=0;
    }
    showSlice(currentSliceIndex);
},1000)
 */

//sliceshow control

/* const next=document.querySelector('#next');
const previous = document.querySelector('#previous');

next.addEventListener('click',function(){
    currentSliceIndex++;
    if(currentSliceIndex === 10){
        currentSliceIndex=0;
    }
    showSlice(currentSliceIndex);
},)

previous.addEventListener('click',function(){
    removeSliceBackward(currentSliceIndex);
    currentSliceIndex--;
    if(currentSliceIndex === -1){
        currentSliceIndex=9;
    }
    showSlice(currentSliceIndex); 

   
},)
 */