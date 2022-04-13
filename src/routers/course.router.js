import express from 'express';
import courseControllers from '../controllers/course.controller'

const router = express.Router();

router.get('/course', courseControllers.getAllCourse);
router.get('/course/:id', courseControllers.getCourseById);
router.post('/course/add', courseControllers.addCourse);
router.delete('/course/delete/:id', courseControllers.deleteCourse);
router.put('/course/update/', courseControllers.updateCourse);



export default router;    

