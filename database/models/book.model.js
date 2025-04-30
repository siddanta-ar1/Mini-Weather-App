 //books-->  bookname, bookprice, bookauthor, bookgenre, 

const bookModel = (sequelize,DataTypes) => {
   const Book = sequelize.define("book",{
        bookName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bookPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        bookAuthor: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Unknown"
        },
        bookGenre: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Unknown"
        },
    })
    return Book;
     
}

module.exports = bookModel; // Exporting the book model for use in other files 
