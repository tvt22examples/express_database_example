const db=require('../database');

const borrower={
    getAllborrowers:function(callback){
        return db.query("select * from borrower",callback);
    },
    getOneborrower:function(id, callback){
        return db.query("select * from borrower where id_borrower=?",[id],callback);
    },
    addborrower:function(addData,callback){
        return db.query("insert into borrower(firstname,lastname,phone,streetaddress,postalcode) values(?,?,?,?,?)",[addData.firstname,addData.lastname,addData.phone,addData.streetaddress,addData.postalcode],callback);
    },
    updateborrower:function(id,updateData,callback){
       return db.query("update borrower set firstname=?, lastname=?, phone=? where id_borrower=?",[updateData.firstname, updateData.lastname, updateData.phone, id],callback);
    },
    deleteborrower:function(id,callback){
        return db.query("delete from borrower where id_borrower=?",[id],callback);
    }
}

module.exports=borrower;