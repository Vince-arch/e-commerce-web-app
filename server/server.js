//Importing modules
import express from 'express';
import cors from "cors";
import config from "./config.js";

//Initializing express app
const app = express();

app.get('/', (req,res) =>{
    res.send('Hello World')
});

app.listen(config.port, () => {
    console.log('server is running')
})