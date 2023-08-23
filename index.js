import express from "express";
import cors from "cors";
import path from "path";


const app = express()
const port = 3000;
  
//Middleware
app.use(cors());

//Middleware - pwd
const _dirname = path.resolve();

app.get('/', (req, res) => {
    console.log('home page');
    res.send("This is Beyza");
})

//Starts the server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})