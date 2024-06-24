import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import compressFilter from './utils/compressFilter.util';
import config from './config';
import router from './routes';
import morganMiddleware from './middleware/morgan.middleware';

const app: Express = express();

app.use(
  cors({
    // origin is given a array if we want to have multiple origins later
    origin: [config.cors_origin],
    credentials: true,
  })
);

/**
 * Middlewares
 */

app.use(morganMiddleware);

// Helmet is used to secure this app by configuring the http-header
app.use(helmet());

// Compression is used to reduce the size of the response body
app.use(compression({ filter: compressFilter }));

/**
 * Routes
 */

app.use('/api/v1/', router);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'ok' });
});

export default app;
