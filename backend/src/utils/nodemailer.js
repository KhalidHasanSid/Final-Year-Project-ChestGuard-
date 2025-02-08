import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
       auth: {
            user: 'khalidhassan.kh705@gmail.com',
            pass: 'sixw cwgz dwzp orij',
         },
    secure: true,
    });


    export default transporter

