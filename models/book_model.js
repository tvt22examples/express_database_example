const db=require('../database');

const bookArray=[
    {name:"C++", author:"Teppo Testi", isbn:"12-34-56-77"},
    {name:"JavaScript", author:"Aino Testi", isbn:"12-34-56-77"},
    {name:"Tietokannat", author:"Liisa Virtanen", isbn:"12-34-56-77"},
];

const book={
    getAllBooks:function(callback){
        return db.query("select * from book",callback);
    },
    getOneBook:function(id, callback){
        return db.query("select * from book where id_book=?",[id],callback);
    },
    addBook:function(addData,callback){
        return db.query("insert into book(name,author,isbn) values(?,?,?)",[addData.name,addData.author,addData.isbn],callback);
    },
    updateBook:function(id,updateData,callback){
       return db.query("update book set name=?, author=?, isbn=? where id_book=?",[updateData.name, updateData.author, updateData.isbn, id],callback);
    },
    deleteBook:function(id,callback){
        return db.query("delete from book where id_book=?",[id],callback);
    }
}

module.exports=book;