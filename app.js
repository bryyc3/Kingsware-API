import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Email } from './email.js';


const app = express();
const PORT = 5050;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());

app.post('/', (req, res)=>{
    Email(req.body)
});




app.listen(PORT, () =>{
    console.log("Running on port " + PORT);
});
