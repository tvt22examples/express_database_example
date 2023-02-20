const express=require('express');
const controller=express.Router();
const user=require('../models/user_model');

//toteutetaan kaikki user-taulun CRUD-opetaatiot
//Create Read Update Delete
controller.get('/',function(request,response){
    user.getAllusers(function(error,dbData){
        if(error){
            response.send(error);
        }
        else{
            response.send(dbData);
        }
    });
});

controller.get('/:id',function(request,response){
    user.getOneuser(request.params.id,function(error,dbData){
        if(error){
            response.send(error);
        }
        else{
            response.send(dbData[0]);
        }
    });
});

controller.post('/',function(request,response){
    user.adduser(request.body,function(error,dbData){
        if(error){
            response.send(error);
        }
        else{
            response.send(dbData);
        }
    });

});

controller.put('/:id',function(request,response){
    user.updateuser(request.params.id, request.body, function(error, dbData){
        if(error){
            response.send(error);
        }
        else{
            response.send(dbData);
        }
    });
});

controller.delete('/:id',function(request,response){
    user.deleteuser(request.params.id, function(error, dbData){
        if(error){
            response.send(error);
        }
        else{
            response.send(dbData);
        }
    });
});

module.exports=controller;