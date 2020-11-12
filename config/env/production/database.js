const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: "${process.env.DATABASE_HOST || '127.0.0.1'}",
        port: "${process.env.DATABASE_PORT || 27017}",
        database: "${process.env.DATABASE_NAME || 'strapi'}",
        username: "${process.env.DATABASE_USERNAME || ''}",
        password: "${process.env.DATABASE_PASSWORD || ''}"
      },
      options: {
        ssl: false,
      },
    },
  },
});

//postgres://equlwhjjmqkpdk:28a978bdbd7683822ccad4d6e1941c6ea30048c6a21be1fc51a43ff7c2c0ff79@ec2-54-160-120-28.compute-1.amazonaws.com:5432/de8qqh4onj61m