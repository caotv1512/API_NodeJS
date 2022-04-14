import express from 'express';
import courseControllers from '../controllers/course.controller'

import JWT from '../common/_JWT'

const router = express.Router();

router.get('/admin', async function (req, res){
    const user = {
        user: 'admin',
        email: 'admin@example.com'
    };
    const _token = await JWT.make(user);
    res.send({ token: _token });
});

router.get('/check-token', async function (req, res){
 try {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20ifSwiaWF0IjoxNjQ5OTI5MDk3LCJleHAiOjE2NDk5MzI2OTd9.fSIgheunQazaxWyOqLxArYAz_sCbUZi8iOyMPTQfR1I'
    const data = await JWT.check(token);
    res.send({ data: data });
 } catch (error) {
     res.send({data: 'Token is not valid'});
 }
});




export default router;

