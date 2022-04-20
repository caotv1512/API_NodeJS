import express from 'express';
import adminController from '../controllers/admin.controller'

const router = express.Router();

router.get('/', adminController.getHome);
router.get('/admin', adminController.getAllUser);
router.get('/admin/:id', adminController.getUserById);
router.delete('/admin/delete/:id', adminController.deleteUser);
router.put('/admin/update/', adminController.updateUser);



export default router;    

