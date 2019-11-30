import express from 'express';
import router from './server/router/index';
import cors from 'cors';
import morgan from 'morgan';
import {PORT} from './server/constants/constants';

const port = process.env.PORT || PORT;
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/public', express.static('public'));

app.use('/api', router);


app.listen(port, console.log(`Server has been started on port ${port}...`));


