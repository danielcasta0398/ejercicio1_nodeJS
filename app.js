//Import express library
const express = require("express");
const { userRoutes } = require("./routes/userRoutes");
const { db } = require("./utils/database");

//Create the server
const app = express();


//Enable incoming JSON data

app.use(express.json())

//Endpoints

app.use( '/api/v1/users', userRoutes )


//Create PORT
const PORT = 4005;

//Listen the server
app.listen(PORT, () => {
  console.log(`Express app runing on port: ${PORT}`);
});

//Conection to databases

db.authenticate()
  .then(() => console.log("Successful connection to Databases"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log('Database synced'))
  .catch( err => console.log(err))   
