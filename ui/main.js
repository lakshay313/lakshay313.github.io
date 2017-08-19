console.log('Loaded!');
//change text using java script:
var element=document.getElementById('main-text');
element.innerHTML="New value";
//move image:
var img=document.getElementById('madi');
/*img.onclick=function(){
    img.style.marginLeft='100px';
};*/
var marginLeft =0;

function moveRight(){
    marginLeft+=1;
    img.style.marginLeft=marginLeft+'px';
    
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};