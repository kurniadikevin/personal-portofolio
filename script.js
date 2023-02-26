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

// sliceshow script
const projectBox= document.querySelectorAll('.project-box');
let currentSliceIndex = 0;

const showSlice=(i)=>{
    projectBox[i].style.display='block';
    if(i>0){
    projectBox[i-1].style.display='none';
    } else if( i === 0) {
        projectBox[9].style.display='none';
    }
}
showSlice(currentSliceIndex);

setInterval(function(){
    currentSliceIndex++;
    if(currentSliceIndex === 10){
        currentSliceIndex=0;
    }
    showSlice(currentSliceIndex);
},1000)

