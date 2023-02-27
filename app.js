const express = require('express');
const app=express();
const dotenv=require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const bookRouter=require('./controllers/book');
const borrowerRouter=require('./controllers/borrower');
const userRouter=require('./controllers/user');
const loginRouter=require('./controllers/login');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//suojaamattomat endpointit
app.use('/login',loginRouter);

//suojatut endpointit
app.use(authenticateToken);
app.use('/book',bookRouter);
app.use('/borrower',borrowerRouter);
app.use('/user',userRouter);


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

app.listen(process.env.port,function(){
    console.log('sovellus kuuntelee porttia '+process.env.port);
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    console.log("token = "+token);
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.MY_TOKEN, (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }


module.exports=app;