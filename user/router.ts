// TODO: create a router and bind endpoints here
import {UserController} from './controller'
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router');

const router = new Router();
router.use(bodyParser());

const userController = new UserController();

router.get('/users', userController.getUsers)
router.get('/users/:id', userController.getUserById)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users', userController.deleteUsers)
router.delete('/users/:id', userController.deleteUser)



export default router;
