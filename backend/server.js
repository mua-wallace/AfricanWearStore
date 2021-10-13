import express  from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import process from 'process';
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";



dotenv.config();

const app = express(); 
app.use(express.json());

app.use(express.urlencoded({extended: true}));
mongoose.connect(process.env.MONGDB_URL || 'mongodb://localhost/africanwearstore',
{ useNewUrlParser: true })
.then(() => console.log('Mongodb connected....'))
.catch(err => console.log(err));


app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/', (req, res) => {
    res.send('Server is ready');
});


app.use((err, req, res, next ) => {
    res.status(500).send({ message: err.message});
});
const  port = process.env.PORT || 5000; 
app.listen(port, () => {
    console.log(`Server is at http://localhost:${port}`);
}); 