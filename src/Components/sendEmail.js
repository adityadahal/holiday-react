import axios from 'axios';

const sendEmail = async (emailData) => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/smtp/email', // Brevo's API endpoint for sending emails
      {
        sender: {
          name: emailData.name,
          email: 'toadityadahal@gmail.com',
        },
        to: [
          {
            email: 'toadityadahal@gmail', // Your email address
            name: 'Aditya Dahal',
          },
        ],
        subject: 'Holiday Plan Inquiry',
        htmlContent: `<p>Name: ${emailData.name}</p>
                      <p>Email: ${emailData.email}</p>
                      <p>Destination: ${emailData.destination}</p>
                      <p>Phone: ${emailData.phone}</p>`,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': API_KEY,
        },
      }
    );
    console.log('Email successfully sent!', response.data);
    alert(`Email Couldn't be sent!`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;
