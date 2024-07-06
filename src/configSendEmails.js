import brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

const sendSmtpEmail = new brevo.SendSmtpEmail();

export async function sendEmail(pharmacy, userName) {
  try {
    sendSmtpEmail.subject = "Se ha agregado un nuevo faltante!!!";
    sendSmtpEmail.to = [{ email: "daniel_ramirez82182@elpoli.edu.co", name: userName }];
    sendSmtpEmail.htmlContent = `<html><body><h1>Hola, la regente ${userName}</h1><p>ha agregado un faltante en drogeria ${pharmacy}</p><a href='https://www.faztweb.com'>Go to my website</a></body></html>`;
    // remitente del email
    sendSmtpEmail.sender = {
      name: "PharmaSolve",
      email: "daniel_ramirez82182@elpoli.edu.co",
    };

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log("se envio email satisfactoriamente");
  } catch (error) {
    console.error("Error al enviar", error);
  }
}
