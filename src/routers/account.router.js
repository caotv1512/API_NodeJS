import express from 'express';
import adminController from '../controllers/admin.controller';
const router = express.Router();

router.post('/admin/login/', adminController.login);
router.post('/admin/add', adminController.addUser);


export default router;    

