module.exports = {
   local: {
      client: 'pg',
      version: '9.6',
      connection:{
         host: 'localhost',
         user: 'postgres',
         password: 'S#a8f4ep',
         database: 'teste'
      },
      migrations:{
         directory: 'src/migrations'
      }
   }
}