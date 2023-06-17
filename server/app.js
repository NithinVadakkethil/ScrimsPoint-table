const express = require('express');
require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const db = require('./config/connection');
const port = process.env.PORT || 8000;
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', userRouter);
app.use('/admin', adminRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
