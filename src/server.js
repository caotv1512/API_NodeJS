import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import configViewEngine from './configs/viewEngine';
import courseRouter from './routers/course.router';
import homeRouter from './routers/home.router';
import adminRouter from './routers/admin.router';
import accountRouter from './routers/account.router';
import bodyParser from "body-parser";
import _AuthMiddleware from './middlewares/auth/_AuthMiddleWate'
require('dotenv').config();


const app = express()
const port = process.env.PORT || 3000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      type: 'Library API',
      version: '1.0.0'
    }
  }, apis: ['server,js']
}

// const swaggerDocs = swaggerJSDoc(swaggerOptions){
  
// }



configViewEngine(app);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', accountRouter);
app.use('/api', homeRouter);
app.use(_AuthMiddleware.isAuth);
app.use('/api', courseRouter);
app.use('/api', adminRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})