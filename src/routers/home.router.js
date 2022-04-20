import express from 'express';
import courseControllers from '../controllers/course.controller'

import JWT from '../common/_JWT'

const router = express.Router();

router.get('/check-admin', async function (req, res){
    const user = {
        user: 'admin',
        email: 'admin@example.com'
    };
    const _token = await JWT.make(user);
    res.send({ token: _token });
});

router.get('/check-token', async function (req, res){
 try {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20ifSwiaWF0IjoxNjUwNDE5MDc0LCJleHAiOjE2NTA0MjI2NzR9.izPL_NJ-HpiO8aKk1RPrR5draB-jPYDtCw2HynC6uzY'
    const data = await JWT.check(token);
    res.send({ data: data });
 } catch (error) {
     res.send({data: 'Token is not valid'});
 }
});




export default router;

