module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/dev.db3'
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations'
      }
    }
  };
  