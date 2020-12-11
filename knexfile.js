module.exports = {
    development: {
      // complete your knexfile
      client: "sqlite3",
      useNullAsDefault: true,
      connection: {
        filename: './data/projects.db3' // double check db name
      },
      migrations: {
        directory: "./data/migrations",
      },
      seeds: {
        directory: "./data/seeds"
      },
      pool: {
        afterCreate: (conn, done) => {          
          conn.run('PRAGMA foreign_keys = ON', done); 
        },
    },
  }
};
