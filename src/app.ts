import express, { json } from 'express';
import router from './routes/api.routes';

const app = express();

app.use(json());

app.use('/converter', router);

app.listen(process.env.PORT || 3000, () => console.log('Server has been started'));
