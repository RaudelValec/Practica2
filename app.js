import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import router from './routes/rutasBase.js';



const app = express();

app.set('view engine','ejs')



app.get('/',router);


app.listen(3000,()=>{
    console.log('conectado al puerto 3000');
});