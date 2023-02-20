const db=require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;

const user={
    getAllusers:function(callback){
        return db.query("select * from user_table",callback);
    },
    getOneuser:function(id, callback){
        return db.query("select * from user_table where id_user=?",[id],callback);
    },
    adduser:function(addData,callback){
        bcrypt.hash(addData.password,saltRounds, function(error, cryptedPassword){
            return db.query("insert into user_table(username,password) values(?,?)",[addData.username,cryptedPassword],callback);
        });
       
    },
    updateuser:function(id,updateData,callback){
        bcrypt.hash(updateData.password,saltRounds, function(error, cryptedPassword){
            return db.query("update user_table set username=? ,password=? where id_user=?",[updateData.username,cryptedPassword,id],callback);
        });
    },
    deleteuser:function(id,callback){
        return db.query("delete from user_table where id_user=?",[id],callback);
    }
}

module.exports=user;