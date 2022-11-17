import twilio from "twilio";

const accountSid = "ACa0a29e20be52c461fc91aa5b719a2b18";
const authToken = "a3d1468ba8b1f667f96895713202a939";

const client = twilio(accountSid, authToken);

export const enviarSMS = async (mensaje, numero) => {
	try {
		let rta = await client.messages.create({
			body: mensaje,
			from: "+18588082183",
			to: numero,
		});
		return rta;
	} catch (error) {
		return error;
	}
};