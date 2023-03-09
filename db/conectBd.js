import mongoose from "mongoose";

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://0.0.0.0:27017/practica',{useNewUrlParser: true})
.then((db)=>{
    console.log('conectado a DB');
    mongoose.connection.once('open',()=>{
        console.log('conexion exitosa');
    });
    return db;
}).catch(err =>console.log('Error al conecatr',err));


export default mongoose;
