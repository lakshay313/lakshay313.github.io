var button=document.getElementById('counter');
var counter=0;

button.onclick =function() {
    var request = new XMLHttpsRequest();
    
    request.onreadystatechange = function(){
        if (request.readystate ===XMLHttpRequest.Done){
            if(request.status=== 200){
            var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHtml =counter.toString();    
            }
        }
    };
    request.open('GET','http://lakhshaybansal199888.imad.hasura-app.io/',true);
    request.send(null);
}