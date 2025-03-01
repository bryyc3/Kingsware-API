import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import nodemailer from 'nodemailer';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVICE,
    port: process.env.EMAIL_PORT,
    secure:true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})


app.use(express.json());
app.use(cors({
    origin: process.env.ORIGIN_ADDRESS,
    credentials: true
}));

app.use(express.json());

app.post('/email', (req, res)=>{
    const emailDetails = req.body;
    const mailOptions = {
        from: emailDetails.email,
        to: process.env.EMAIL,
        subject: `${emailDetails.category} Consultation From ${emailDetails.email}`,
        text: emailDetails.description
    };

    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            res.send({emailSent: false});
        }
        else{
            res.send({emailSent: true});
        }
    })
});




app.listen(PORT, () =>{
    console.log("Running on port " + PORT);
});
