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

