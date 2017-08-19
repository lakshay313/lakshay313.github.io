console.log('Loaded!');
//change text using java script:
var element=document.getElementById('main-text');
element.innerHTML="New value";
//move image:
var img=document.getElementById('madi');
img.onclick=function(){
    img.style.marginleft='100px';
}