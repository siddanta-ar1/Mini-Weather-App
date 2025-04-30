 //hami yaha database connection ko code likhne chham 
 const {Sequelize, DataTypes,}  = require('sequelize'); // Importing the Sequelize class from the sequelize library
    //const sequelize = require('sequelize'); // Importing the sequelize library
    //const Sequelize = sequelize.Sequelize; // Creating a new instance of Sequelize
    //const DataTypes = sequelize.DataTypes; // Creating a new instance of DataTypes
    
    // const bookModel = require("./models/book.model.js"); // Importing the book model from the models folder
    // bookModel(); // Calling the book model function with the sequelize instance and DataTypes
    
    
    const sequelize = new Sequelize("postgresql://postgres.ejlmnuznaeszqtbenvvm:3@7nWzwN28BL@@k@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres") // Creating a new instance of Sequelize

    sequelize.authenticate() // Authenticating the connection to the database
    .then(() => { // If the connection is successful
        console.log('Connection has been established successfully.'); // Log a success message
    }) // Closing the then block
    .catch((error) => { // If there is an error during authentication
        
        console.error('Unable to connect to the database:', error); // Log the error message
    } // Closing the catch block
    ) // Closing the authenticate method

    // const db = {
    //     Sequelize : Sequelize, // Adding the Sequelize class to the db object
    //     sequelize : sequelize, // Adding the sequelize instance to the db object
    // };

     const db = {}; // Creating an empty object to store the database models
     db.Sequelize = Sequelize; // Adding the Sequelize class to the db object
     db.sequelize = sequelize; // Adding the sequelize instance to the db object 
      
    db.books = require("./models/book.model.js")(sequelize, DataTypes); // Importing the book model and passing the sequelize instance and DataTypes to it
    // const bookModel = require("./models/book.model.js")(sequelize, DataTypes); // Importing the book model and passing the sequelize instance and DataTypes to it
   
    db.users = require("./models/user.model.js")(sequelize, DataTypes); // Importing the user model and passing the sequelize instance and DataTypes to it
    // const userModel = require("./models/user.model.js")(sequelize, DataTypes); // Importing the user model and passing the sequelize instance and DataTypes to it
   
    db.products = require("./models/product.model.js")(sequelize, DataTypes); // Importing the product model and passing the sequelize instance and DataTypes to it 
    // const productModel = require("./models/product.model.js")(sequelize, DataTypes); // Importing the product model and passing the sequelize instance and DataTypes to it


    // migrate garnu paryo 
    sequelize.sync({ force: false,alter: false }) // Syncing the database models with the database
    .then(() => { // If the sync is successful
        console.log('Migration vayo!'); // Log a success message 
    }); // Closing the then block 


     module.exports = db; // Exporting the db object for use in other files