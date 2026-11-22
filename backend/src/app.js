import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL.split(',') }));
app.use(express.json());
app.use('/api', routes);

app.use((err, _req, res, _next) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  console.error(err);
  res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
});
export default app;