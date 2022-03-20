
import express from 'express';
import controller from '../controllers/index';
const router = express.Router();
router.post('/users/byemail', controller.getUserByEmail);
router.get('/users', controller.getUsers);
router.get('/users/:id', controller.getUser);
router.put('/users/:id', controller.updateUser);

export = router;