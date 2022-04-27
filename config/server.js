module.exports = ({ env }) => ({
  host: env('HOST', '192.168.0.102'),
  port: env.int('PORT', 1337),
  url: 'https://cms.klubbsegling.se',
});
