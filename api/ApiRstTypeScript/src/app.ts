import express from 'express';
import morgan from 'morgan'
import path from 'path'
require('dotenv').config();

const cors = require('cors');

const app = express();

const corsOptions = {
  exposedHeaders: 'auth-token',
};

app.use(cors(corsOptions));

import indexRouter from './routes/index'
///configuration
app.set('port', process.env.PORT|| 4000);
//middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use('/api' , indexRouter);
app.use('/uploads',  express.static(path.resolve('uploads')));
export default app;

