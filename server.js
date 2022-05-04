const { app } = require('./app');
const { db } = require('./utils/database');

//Conection to databases

db.authenticate()
  .then(() => console.log('Successful connection to Databases'))
  .catch(err => console.log(err));

db.sync( )
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 4000;

//Listen the server
app.listen(PORT, () => {
  console.log(`Express app runing on port: ${PORT}`);
});
