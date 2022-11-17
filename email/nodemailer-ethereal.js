import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'neoma40@ethereal.email',
        pass: 'NZuFmvm4FRgBfqxV3e'
    }
});

export const enviarMail = (asunto, mensaje, cb) => {
	const mailOptions = {
		from: "Servidor Node.js",
		to: "neoma40@ethereal.email",
		subject: asunto,
		html: mensaje,
	};

	transporter.sendMail(mailOptions, (err, info) => {
		/*
        if(err) {
            console.log(err)
            //return err
        }
        else console.log(info)
        */
		cb(err, info);
	});
};