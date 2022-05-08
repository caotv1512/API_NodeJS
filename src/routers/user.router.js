import express from 'express';
import userController from '../controllers/users.controller'

const router = express.Router();

router.get('/', userController.getHome);
router.get('/user', userController.getAllUser);
router.get('/user/:id', userController.getUserById);
router.post('/user/add', userController.addUser);



export default router;    

