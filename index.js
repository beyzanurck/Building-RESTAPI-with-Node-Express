import express from "express";
import cors from "cors";
import path from "path";
import BOOKS from "./books.js";


const app = express()
const port = 3000;
  
//Middleware
app.use(cors());

//Middleware - pwd
const _dirname = path.resolve();

//Defines an API endpoint
app.get('/', (req, res) => {
    console.log('home page');
    res.send("This is Beyza");
})

app.get('/books', (req, res)=> {
    console.log(BOOKS)
    res.json(BOOKS)
})


app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    //console.log(req.params.id)

    const requestedBook = BOOKS.find(book => book.ID === id)
    if(requestedBook){
        res.json(requestedBook)
    }
    else{
        res.status(404).send(`Sorry I don't have that book`);
    }
})

// Endpoint for adding a new book
app.post('/books/posts', (req, res) => {
    const newBook = {
        ID: '8',
        title: 'The Power Of Habits',
        author: 'Charless Duhigg', 
        format: 'Paperback' 
    };

    BOOKS.push(newBook);

    res.status(201).json({ message: 'New book added successfully', book: newBook });
})


//Starts the server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
