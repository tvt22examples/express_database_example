const express=require('express');
const controller=express.Router();
const book=require('../models/book_model');

//toteutetaan kaikki book-taulun CRUD-opetaatiot
//Create Read Update Delete
controller.get('/',function(request,response){
    book.getAllBooks(function(error,dbData){
        if(error){
            response.send(error);
        }
        else{
            response.send(dbData);
        }
    });
});

controller.get('/:id',function(request,response){
    book.getOneBook(request.params.id,function(error,dbData){
        if(error){
            response.send(error);
        }
        else{
            response.send(dbData[0]);
        }
    });
});

controller.post('/',function(request,response){
    book.addBook(request.body,function(error,dbData){
        if(error){
            response.send(error);
        }
        else{
            response.send(dbData);
        }
    });

});

controller.put('/:id',function(request,response){
    book.updateBook(request.params.id, request.body, function(error, dbData){
        if(error){
            response.send(error);
        }
        else{
            response.send(dbData);
        }
    });
});

controller.delete('/:id',function(request,response){
    book.deleteBook(request.params.id, function(error, dbData){
        if(error){
            response.send(error);
        }
        else{
            response.send(dbData);
        }
    });
});

module.exports=controller;