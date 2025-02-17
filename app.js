import express from 'express';

const app = express();
const PORT = 5000;

app.use(express.json());

app.post('/', (req, res)=>{
    console.log(req.body);
})




app.listen(PORT, () =>{
    console.log("Running on port " + PORT);
});
