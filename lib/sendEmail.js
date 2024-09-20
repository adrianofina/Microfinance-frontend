// import sgMail from '@sendgrid/mail';

// Initialize SendGrid client with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendResetPasswordEmail = async (email, name, resetLink) => {
  // Setup SendGrid message
  const msg = {
    to: email,
    from: "adrianophinah42@gmail.com", // Ensure this email is verified in SendGrid
    subject: "Reset Your Password",
    text: `Hello ${name},

We received a request to reset your password. Please click the link below to choose a new password:

${resetLink}

If you did not request a password reset, please ignore this email.

Thank you,
The Support Team`,
    html: `
     <div style="margin-top:100rem; background-color: #f9f9f9; padding: 20px; font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 12px auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); font-size: 16px; position: relative;">
  <div style="position: absolute; left: 20%; transform: translateX(-50%); top: 10px; ">
   
  </div>
  <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 40px;">
    <h2 style="color: #3b82f6; font-weight: bold; font-size: 34px; text-align: center;">
      Forgot your Password?
    </h2>
    <p>Hello, ${name}</p>
    <p>We received a request to reset your password. Click the button below to choose a new password:</p>
    <div style="margin: 30px 0;">
      <a href="${resetLink}" 
         style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 4px;">
        RESET YOUR PASSWORD
      </a>
    </div>
    <p>If the button above doesn't work, copy and paste the following link into your browser:</p>
    <p style="word-wrap: break-word;"><a href="${resetLink}" style="color: #3b82f6;">${resetLink}</a></p>
    <p>If you did not request a password reset, please ignore this email.</p>
    <p>Thank you,<br>The Support Team</p>
    <hr style="border: none; border-top: 1px solid #ccc; margin-top: 20px;">
    <p style="font-size: 12px; color: #999; text-align: center;">
      Adrian Microfinance Team, Got you back.
    </p>
  </div>
</div>

    `,
  };

  try {
    await sgMail.send(msg);
    console.log('Password reset email sent successfully');
  } catch (error) {
    console.error('Error sending password reset email:', error);
  }
};

export default sendResetPasswordEmail;
