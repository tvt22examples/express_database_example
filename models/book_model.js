const bookArray=[
    {name:"C++", author:"Teppo Testi", isbn:"12-34-56-77"},
    {name:"JavaScript", author:"Aino Testi", isbn:"12-34-56-77"},
    {name:"Tietokannat", author:"Liisa Virtanen", isbn:"12-34-56-77"},
];

const book={
    getAllBooks:function(){
        return bookArray;
    },
    getOneBook:function(id){
        return bookArray[id];
    },
    addBook:function(addData){
        let sql='insert into book(name,author,isbn) values('+addData.name+','+addData.author+','+addData.isbn+')';
        return sql;
    },
    updateBook:function(id,updateData){
        let sql='update book set name='+updateData.name+', author='+updateData.author+', isbn='+updateData.isbn+' where id_book='+id;
        return sql;
    },
    deleteBook:function(id){
        let sql='delete from book where id_book='+id;
        return sql;
    }
}

module.exports=book;