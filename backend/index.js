import express from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=> {
    console.log('Connected to Mongo DB');
}).catch((err) => {
    console.log(err);
});

const app = express();
app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.listen(3000, ()=> {
    console.log('Server is Running on port 3000!!!')
});