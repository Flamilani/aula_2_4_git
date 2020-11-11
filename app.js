// import express no app.js
import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';

const app = express();

require('dotenv').config();

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://{
        $process.env.USERDB}
      ':'{$process.env.PWDDB}
      @cluster0.w4joa.mongodb.net/grades?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
  }
})();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => console.log('API rodando'));
