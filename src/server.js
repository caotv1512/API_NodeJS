import express from 'express';
import adminRouter from './routers/user.router';
import bodyParser from 'body-parser';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', adminRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
