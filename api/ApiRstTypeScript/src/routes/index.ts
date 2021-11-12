import {Router} from 'express';
const router =Router();
import {signip,signup,profile} from '../Services/Authentication.service'
import {createUser, getUsers ,getUser, deleteUser,updateUser} from '../Services/User.service'
import multer from '../libs/multer'
import {TokenValidation} from '../libs/validateToken'

router.post('/signup',signup);
router.post('/signin',signip);
router.get('/profile',TokenValidation, profile);

router.route('/course')
.get(getUsers)
.post(multer.single('image'), createUser)


router.route('/course/:id')
.get(getUser)
.delete(deleteUser)
.put(updateUser)
export default router;