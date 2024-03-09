import express, { request, response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import bookRoute from './routes/bookRoute.js';

const app = express();

app.use(express.json());


app.get('/', (request, response)=>{
    console.log(request);
    return response.status(234).send("welcp");
});

app.use('/books', bookRoute);  

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log("databse connected")
    

app.listen(PORT,()=>{
    console.log(`my server ${PORT}`)
});
})
.catch((error)=>{
    console.log(error)
}) ;