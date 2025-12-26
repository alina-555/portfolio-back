import express from 'express'; 
import cors from 'cors'; 
import dotenv from 'dotenv';
import mailRouter from './router/mail.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;






app.use(express.json());

app.use(cors());



app.post('/send-email', mailRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });