module.exports = {
  //
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: 'fredrik.burmester@gmail.com',
          pass: 'hhhrqoboineqiwmd',
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'info@klubbsegling.se',
        defaultReplyTo: 'info@klubbsegling.se',
      },
    },
  },
};
