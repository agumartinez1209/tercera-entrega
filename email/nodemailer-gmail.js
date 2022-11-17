import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "agu.am.2359@gmail.com",
		pass: "fwwkobjshsfcgbzx",
	},
});

export const enviarMail = (asunto, mensaje, adjunto, to, cb) => {
	const mailOptions = {
		from: "Servidor Node.js",
		to: "neoma40@ethereal.email",
		subject: asunto,
		html: mensaje,
		attachments: [
			{
				// filename and content type is derived from path
				path: adjunto,
				filename: "foto.jpg",
			},
		],
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