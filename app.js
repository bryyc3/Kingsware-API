import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());

app.post('/', (req, res)=>{
    console.log(req.body);
});




app.listen(PORT, () =>{
    console.log("Running on port " + PORT);
});
