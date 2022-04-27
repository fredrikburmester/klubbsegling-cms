module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cb1cdbc6796cc2740d9a40b58a38bfe7'),
  },
});
