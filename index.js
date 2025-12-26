import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mailRouter from './router/mail.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// test route
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

// routes
app.post('/send-email', mailRouter);

// ❌ ՉԿԱ app.listen
export default app;