const express=require('express');
const controller=express.Router();
const book=require('../models/book_model');

//toteutetaan kaikki book-taulun CRUD-opetaatiot
//Create Read Update Delete
controller.get('/',function(request,response){
    let data=book.getAllBooks();
    response.json(data);
});

controller.get('/:id',function(request,response){
    let data=book.getOneBook(request.params.id);
    response.json(data);
});

controller.post('/',function(request,response){
    let data=book.addBook(request.body);
    response.json(data);
});

controller.put('/:id',function(request,response){
    let data=book.updateBook(request.params.id, request.body);
    response.json(data);
    console.log(request.body);
});

controller.delete('/:id',function(request,response){
    let data=book.deleteBook(request.params.id);
    response.json(data);
    console.log("poistaa kirjan, jonka id="+request.params.id);
});

module.exports=controller;