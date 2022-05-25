//Import express library
const express = require('express');
const { globalErrorHandler } = require('./controllers/errorController');
const { postRouter } = require('./routes/repairRoutes');
const { userRoutes } = require('./routes/userRoutes');

//Create the server
const app = express();

//Enable incoming JSON data

app.use(express.json());

//Endpoints

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/repairs', postRouter);

//Global error handler
app.use('*', globalErrorHandler);

module.exports = { app };
