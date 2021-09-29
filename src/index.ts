import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import connectDB from './config/db';
import routes from './routes';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/api/', routes);

connectDB();

app.listen(app.get('port'), () => {
  console.log(`Server on http://localhost:${app.get('port')}`);
});
