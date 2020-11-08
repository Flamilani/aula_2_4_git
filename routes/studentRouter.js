import { studentModel } from '../models/studentModel';

const express = require('express');

const app = express();

app.put('/student/:id', async (req, res) => {
  try {
    const student = await studentModel.findOneAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});
export { app as studentRouter };
