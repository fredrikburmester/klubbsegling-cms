module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET')
    },
  },
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
      },
      settings: {
        defaultFrom: 'info@klubbsegling.se',
        defaultReplyTo: 'info@klubbsegling.se',
      },
    },
  },
});
