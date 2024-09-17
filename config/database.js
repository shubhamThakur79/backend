const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'mysql'); // Set 'mysql' as default client

  const connections = {
    mysql: {
      connection: {
        host: env('DATABASE_HOST', 'fuc.h.filess.io'), // Your MySQL host
        port: env.int('DATABASE_PORT', 3306), // Your MySQL port
        database: env('DATABASE_NAME', 'backend_laughpink'), // Your database name
        user: env('DATABASE_USERNAME', 'backend_laughpink'), // Your database username
        password: env('DATABASE_PASSWORD', '7e383a0f99cc6bd07e8df796c0bf523f07e26ae9'), // Your database password
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    // Other configurations for different databases can go here
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
