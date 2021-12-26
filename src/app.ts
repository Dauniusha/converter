import express, { json } from 'express';
import router from './routes/api.routes';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(json());

app.use('/converter', router);

app.listen(process.env.PORT || 3000, () => console.log('Server has been started'));
