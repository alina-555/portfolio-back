import nodemailer from 'nodemailer';


const mailController={
    sendEmail: async (req, res) => {
        try {
            console.log(req.body,666);
            const {name, surname, phone, email,message} = req.body;
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                port: 465,
                auth: {
                  user: process.env.GMAIL_USER,
                  pass: process.env.GMAIL_PASSWORD,
                },
              });
            
              const mailOptions = {
                subject: 'Ծանուցում',
                from: process.env.GMAIL_USER,
                to: process.env.GMAIL_USER,
                text: `Դուք ունեք նոր հաղորդագրություն:\n
                Անուն: ${name} \n
                Ազգանուն: ${surname} \n
                Էլ. Հասցե: ${email}\n
                Նամակ: ${message}\n
                Հեռախոսահամար: ${phone} \n
                `,
              };
              await transporter.sendMail(mailOptions);

              res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
          console.error('Error sending email:', error);
          res.status(500).json({ error: 'Failed to send email' });
        }
      },
}

export default mailController