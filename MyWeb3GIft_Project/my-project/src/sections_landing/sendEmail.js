
// import { google }from 'googleapis';
// import nodemailer from 'nodemailer';

// const oAuth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET, // Corrected typo here
//   process.env.REDIRECT_URI
// );

// oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

// const sendEmail = async (options) => {
//   try {
//     const accessToken = await oAuth2Client.getAccessToken();

//     const transport = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: process.env.SMPT_MAIL,
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         refreshToken: process.env.REFRESH_TOKEN,
//         accessToken: accessToken,
//       },
//     });

//     const mailOptions = {
//       from: `SENDER NAME <${process.env.SMPT_MAIL}>`,
//       to: options.email,
//       subject: options.subject,
//       text: options.message,
//       html: `<h1>${options.message}</h1>`,
//     };

//     const result = await transport.sendMail(mailOptions);
//     return result;
//   } catch (error) {
//     return error;
//   }
// };

// module.exports = sendEmail;
