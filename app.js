//Import express library
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { globalErrorHandler } = require('./controllers/errorController');
const { postRouter } = require('./routes/repairRoutes');
const { userRoutes } = require('./routes/userRoutes');
dotenv.config({ path: './config.env' });

//Create the server
const app = express();

//Enable incoming JSON data

app.use(express.json());

// Add security  helmets

app.use(helmet());

// Compress responses

app.use(compression());

// Log incoming requests

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

//Endpoints

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/repairs', postRouter);

//Global error handler
app.use('*', globalErrorHandler);

module.exports = { app };
