import axios from 'axios';

export const sendContactMail = async (name:string, senderMail:string, subject:string, content:string) => {
  const data = {
    name,
    senderMail,
    subject,
    content,
  };

  try {
    return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
};
