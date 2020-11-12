module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'danny_gdo@hotmail.com',
        defaultReplyTo: 'danny_gdo@hotmail.com',
      },
    },
    // ...
  });