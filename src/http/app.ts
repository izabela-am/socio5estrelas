import 'express-async-errors';
import 'reflect-metadata';

import express from "express";
import helmet from 'helmet';
import cors from 'cors';

import { routes } from './routes/routes';

export const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(helmet());

app.use(routes);
