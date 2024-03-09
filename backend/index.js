import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

app.get('/', (request, response)=>{
    console.log(request);
    return response.status(234).send("welcp");
});

app.post('/books',async(request,response)=>{
    try{
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message:'send all required fields'
            });
        }

        const newBook = {
            title:request.body.title,
            author:request.body.author,
            publishYear:request.body.publishYear,
        };

        const book = await Book.create(newBook);

        return response.status(201).send(book);

    } catch (error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
})

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