const express = require('express');
import { studentRouter } from './routes/studentRouter.js';

const app = express();
app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log('API rodando'));
