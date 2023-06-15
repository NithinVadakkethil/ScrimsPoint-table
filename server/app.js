const express = require('express');
require('dotenv').config();
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

const app = express();
const port = process.env.PORT || 8000;

app.use('/', userRouter);
app.use('/admin', adminRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
