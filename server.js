var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').Pool;

var app = express();
app.use(morgan('combined'));
var articles= { 
'article-one' :{
 title: 'Article-one | Lakshay Bansal',
 heading: 'Article-one',
 date: '16 August,2017',
 content: ` <p>
           A website content writer or web content writer specializes in providing relevant content for websites. Every website has a specific target audience and requires different content. Content should contain key words aimed towards                 improving a website's SEO.
           </p>    
           <p>
           Most story pieces are centered on marketing products or services, though this is not always the case. Some websites are informational only and do not sell a product or service. Informational content aims to educate the reader                with complex information that is easy to understand and retain.
           </p>`
           },
'article-two':{
 title: 'Article-two | Lakshay Bansal',
 heading: 'Article-two',
 date: '16 August,2017',
 content: ` <p>
           A website content writer or web content writer specializes in providing relevant content for websites. Every website has a specific target audience and requires different content. Content should contain key words aimed towards                 improving a website's SEO.
           </p>    
           <p>
           Most story pieces are centered on marketing products or services, though this is not always the case. Some websites are informational only and do not sell a product or service. Informational content aims to educate the reader                with complex information that is easy to understand and retain.
           </p>`
           },
'article-three':{
 title: 'Article-three | Lakshay Bansal',
 heading: 'Article-three',
 date: '16 August,2017',
 content: ` <p>
           A website content writer or web content writer specializes in providing relevant content for websites. Every website has a specific target audience and requires different content. Content should contain key words aimed towards                 improving a website's SEO.
           </p>    
           <p>
           Most story pieces are centered on marketing products or services, though this is not always the case. Some websites are informational only and do not sell a product or service. Informational content aims to educate the reader                with complex information that is easy to understand and retain.
           </p>`
           }
           };
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate=`
  <html>
    <head>
        <title>
        ${title}
        </title>
        <meta name="viewport" content="width=ddevice-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home </a>
        </div>
        <hr/>
        <h3>${heading} </h3>
        <div>${date}</div>
        <div>${content}
        </div>
        </div>
    </body>
</html>  
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db',function(req,res){
    // amke a select request 
    // return a response with the results
   pool.query('SELECT * FROM test',function(err,result){
      if(err){
          res.status(500).send(err.toString());
      }
      else{
          res.send(JSON.stringify(result));
      }
       
   }); 
    
});
var counter=0;
app.get('/counter', function (req,res) {
     counter=counter+1;
     res.send(counter.toString());
});
var names=[];
app.get('/submit-name',function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});
app.get('/:articleName', function (req,res) {
     var articleName=req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
