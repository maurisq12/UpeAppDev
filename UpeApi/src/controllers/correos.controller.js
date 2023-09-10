import nodemailer from 'nodemailer'

export const enviarCorreoRegistro = async (req, res) => {
  const {pCedula,pCarne, pNombre, pApellido1, pApellido2, pFechaNacimiento, pCorreo, pContrasena} = req.body


  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "cubiculosTEC@outlook.com", // generated ethereal user
      pass: "proyectoap123", // generated ethereal password
    },
  });


  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "cubiculosTEC@outlook.com", // sender address
    to: pCorreo, // list of receivers
    subject: "Cubiculos TEC - Nuevo Registro", // Subject line // plain text body
    html: `
    <html>
    <body>
    <h2>Bienvenido a CubiculosTEC</h2>
    <p>A continuación los datos del registro para esta cuenta: </p><br>
    <p>Nombre: ${pNombre} ${pApellido1} ${pApellido2}</p>
    <p>Cédula: ${pCedula}</p>
    <p>Carné: ${pCarne}</p>
    <p>Fecha de nacimiento: ${pFechaNacimiento}</p>
    <p>Correo electrónico: ${pCorreo}</p>
    <p>Contraseña: ${pContrasena}</p><br>
    <p>Ahora puedes iniciar sesión y reservar cubículos </p>
    </body>
    </html>`// html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  return;

}

