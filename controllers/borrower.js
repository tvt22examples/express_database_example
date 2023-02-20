const express=require('express');
const controller=express.Router();
const borrower=require('../models/borrower_model');

//toteutetaan kaikki borrower-taulun CRUD-opetaatiot
//Create Read Update Delete
controller.get('/',function(request,response){
    borrower.getAllborrowers(function(error,dbData){
        if(error){
            response.send(error);
        }
        else{
            response.send(dbData);
        }
    });
});

controller.get('/:id',function(request,response){
    borrower.getOneborrower(request.params.id,function(error,dbData){
        if(error){
            response.send(error);
        }
        else{
            response.send(dbData[0]);
        }
    });
});

controller.post('/',function(request,response){
    borrower.addborrower(request.body,function(error,dbData){
        if(error){
            response.send(error);
        }
        else{
            response.send(dbData);
        }
    });

});

controller.put('/:id',function(request,response){
    borrower.updateborrower(request.params.id, request.body, function(error, dbData){
        if(error){
            response.send(error);
        }
        else{
            response.send(dbData);
        }
    });
});

controller.delete('/:id',function(request,response){
    borrower.deleteborrower(request.params.id, function(error, dbData){
        if(error){
            response.send(error);
        }
        else{
            response.send(dbData);
        }
    });
});

module.exports=controller;