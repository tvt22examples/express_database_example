const express = require('express');
const app=express();
const port='3000';

const bookRouter=require('./controllers/book');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/book',bookRouter);

app.use(function(request, response, next){
    console.log("Olen Middleware 1");
    next();
});

app.get('/',function(request,response){
    console.log("test1");
    response.send("Express esimerkki");
});

app.use(function(request, response, next){
    console.log("Olen Middleware 2");
    next();
});
app.get('/esim1',function(request,response){
    response.send("Tämä on Endpoint /esim1")
});

app.get('/esim2/:fname?',function(request,response){
    response.send("terve "+request.params.fname);
});

app.post('/',function(request, response){
    response.send(request.body);
    console.log(request.body.etunimi);
});

app.listen(port,function(){
    console.log('sovellus kuuntelee porttia '+port);
});

module.exports=app;