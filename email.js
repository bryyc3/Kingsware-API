import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVICE,
    port: process.env.EMAIL_PORT,
    secure:true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})

export function Email(emailDetails){
    const mailOptions = {
        from: emailDetails.email,
        to: process.env.EMAIL,
        subject: `${emailDetails.category} Consultation From ${emailDetails.email}`,
        text: emailDetails.description
    };

    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log(err) ;
        }
        else{
            console.log(info) ;
        }
    })
}