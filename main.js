var button=document.getElementById('counter');

button.onclick =function() {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if (request.readyState ===XMLHttpRequest.DONE){
            if(request.status == 200){
            var counter=request.responseText;
            var span=document.getElementById('counter');
            span.innerHtml =counter.toString();    
            }
        }
    };
    request.open('GET','http://lakhshaybansal199888.imad.hasura-app.io/counter',true);
    request.send(null);
};


//SERVER NAME:
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function() {
    
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i< names.length; i++){
        list += '<li>'+ names[i] + '<li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHtml=list;
};