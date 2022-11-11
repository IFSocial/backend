import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
    'Access-Control-Allow-Origin',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: '*',
  preflightContinue: false,
};

app.use(express.json());
app.use(routes);

app.use(cors(options));

app.listen(process.env.PORT, () => {
  console.log('Running on Port 5000');
});

