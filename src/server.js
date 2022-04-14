import express from 'express';
import configViewEngine from './configs/viewEngine';
import courseRouter from './routers/course.router';
import adminRouter from './routers/admin.router';
import bodyParser from "body-parser";
import _AuthMiddleware from './common/_AuthMiddleWate'
require ('dotenv').config();


const app = express()
const port = process.env.PORT || 3000;

configViewEngine(app);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', courseRouter);
app.use('/api', adminRouter);
app.use(_AuthMiddleware.isAuth)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})