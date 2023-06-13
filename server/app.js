const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 8000;

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

app.get('/', (req, res) => {
  res.send('Hi, Brro!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
