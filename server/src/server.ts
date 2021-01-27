import Express, { json } from 'express';
import 'express-async-errors';
import routes from './routes/index';
import ExceptionError from './middleware/exceptionError';

import cors from 'cors';
const app = Express();

app.use(cors());
app.use(json());
app.use(routes);
app.use(ExceptionError);
app.listen(3333, () => console.log('Server On!'));
