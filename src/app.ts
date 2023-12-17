import cors from 'cors';
import helmet from 'helmet';
import express, { Application, json } from 'express';

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(json());

export default app;
