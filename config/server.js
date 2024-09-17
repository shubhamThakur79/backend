module.exports = ({ env }) => ({
  enabled: true,
  origin: env('CORS_ORIGIN', '*'), // Or specify your frontend URL like 'http://localhost:3000'
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
  credentials: true,
});
