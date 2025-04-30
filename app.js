 const express = require('express'); // Importing the express module
const { books } = require('./database/connection.js');
 const app = express(); // Creating an instance of express

require("./database/connection.js"); // Importing the database connection file

app.use(express.json()); // Middleware to parse JSON request bodies

app.get('/books', async(req, res) => { 
  //logical code 
 const datas = await books.findAll() // Fetching all books from the database   for mongoDB books.find({})
      
  // Defining a route for the root URL 
  res.json({ message: 'Get book',
    datas : datas //data 
   }); // Sending a JSON response with a message
}); // Closing the route definition


app.post('/books', async(req, res) => { // Defining a route for the root URL 
  //logical code
  console.log(req.body); // Logging the request body to the console
  console.log(req.body.bookName); // Logging the book name from the request body to the console
  console.log(req.body.bookPrice); // Logging the book price from the request body to the console
  
  const { bookName, bookPrice,bookAuther,bookGenre } = req.body; // Destructuring the book name and price from the request body
 await books.create({ bookName, bookPrice,bookAuther,bookGenre}) // Creating a new book in the database
 
//   books.create({
//     bookName: bookName,
//     bookPrice: bookPrice,
//     bookAuther: bookAuther,
//     bookGenre: bookGenre
// })

  res.json({ message: 'add book' }); // Sending a JSON response with a message
}); // Closing the route definition

app.delete('/books/:id', (req, res) => { // Defining a route for the root URL 
  res.json({ message: 'delete book' }); // Sending a JSON response with a message
}); // Closing the route definition

app.patch('/books/:id', (req, res) => { // Defining a route for the root URL 
  res.json({ message: 'update book' }); // Sending a JSON response with a message
}); // Closing the route definition


postgresql://postgres.ejlmnuznaeszqtbenvvm:!@#123QWEasd@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres

app.listen(3000, () => {           // Starting the server on port 3000
     console.log('Server is running on port 3000');         // Logging a message to the console
}   );

