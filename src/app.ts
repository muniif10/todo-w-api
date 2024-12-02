import express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from '../src/taskRoutes';

const app = express();
app.use(bodyParser.json());
app.use(taskRoutes);

export default app;