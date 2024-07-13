//Importing modules
import express from 'express';
import mongoose from 'mongoose';
import {PORT} from  './config.js';
//import cors from 'cors';

//Initializing express app
const app = express();

app.get('/', (req,res) =>{
    res.send('Hello World')
});

app.listen(PORT)