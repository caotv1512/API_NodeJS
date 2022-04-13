import express from 'express';
import configViewEngine from './configs/viewEngine';
import courseRouter from './routers/course.router';
import bodyParser from "body-parser";


require ('dotenv').config();


const app = express()
const port = process.env.PORT || 8080;

configViewEngine(app);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', courseRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})