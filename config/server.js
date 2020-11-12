module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '9af6e1fe6c260cf28ca466710b63b698'),
    },
  },
});
/* const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
      },
      options: {
        ssl: false,
      },
    },
  },
}); */

//postgres://equlwhjjmqkpdk:28a978bdbd7683822ccad4d6e1941c6ea30048c6a21be1fc51a43ff7c2c0ff79@ec2-54-160-120-28.compute-1.amazonaws.com:5432/de8qqh4onj61m