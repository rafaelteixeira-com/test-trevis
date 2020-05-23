module.exports = {
   local: {
      client: 'pg',
      version: '9.6',
      connection:{
         host: 'localhost',
         user: 'postgres',
         password: 'p',
         database: 'teste',
      },
      migrations: {
         directory: 'src/migrations',
      }
   },
   elephant: {
      client: 'pg',
      version: '9.6',
      connection: {
         host: 'rajje.db.elephantsql.com',
         user: 'ayrmcprc',
         password: 'KbJNb-SbBM5wTn2I5McOKroUYcqWvfWO',
         database: 'ayrmcprc',
      },
      migrations: {
         directory: 'src/migrations',
      },
   },
};
