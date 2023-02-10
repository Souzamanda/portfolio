import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport';
import { NextApiRequest, NextApiResponse } from 'next';

const email = process.env.EMAIL_ADDRESS;
const emailPass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user:email,
    pass: emailPass
  },
});

const mailer = ({senderMail, name, subject, text}) => {
  const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;
  const message = {
    from: from,
    to: email,
    subject,
    text,
    replyTo: senderMail,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      error ? reject(error) : resolve(info)
    });
  })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { senderMail, name, subject, content } = req.body;

    if (!senderMail.trim() || !name.trim() || !subject.trim() || !content.trim()) {
      return res.status(403).send('');
    }

    const mailerRes = await mailer({ senderMail, name, subject, text:content});
    res.send(mailerRes);


  } catch (error) {
    return res.json({
      error: true,
      message: error
    });
  }
};
