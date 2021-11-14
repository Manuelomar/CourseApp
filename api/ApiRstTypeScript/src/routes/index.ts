import {Router} from 'express';
const router =Router();
import {signip,signup,profile} from '../Services/Authentication.service'
import {createUser, getUsers ,getUser, deleteUser,updateUser} from '../Services/User.service'
import {createCourse, getCourses,getCourse, deleteCourse,updateCourse} from '../Services/Course.Service'

import multer from '../libs/multer'
import {TokenValidation} from '../libs/validateToken'

router.post('/signup',signup);
router.post('/signin',signip);
router.get('/profile',TokenValidation, profile);

router.route('/user')
.get(getUsers)
.post(multer.single('image'), createUser)
router.route('/user/:id')
.get(getUser)
.delete(deleteUser)
.put(updateUser)
//course rute

router.route('/course')
.get(getCourses)
.post(multer.single('image'),createCourse)
router.route('/course/:id')
.get(getCourse)
.delete(deleteCourse)
.put(updateCourse)


export default router;