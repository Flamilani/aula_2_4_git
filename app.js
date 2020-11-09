// import express no app.js
import express from 'express';
import mongoose from 'mongoose';
// import { studentRouter } from './routes/studentRouter.js';

const app = express();

async () => {
  try {
    await mongoose.connect();
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
  }
};

app.use(express.json());
//app.use(studentRouter);

app.listen(3000, () => console.log('API rodando'));
