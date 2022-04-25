import { Router } from 'express'
import validateSchema from '../middlewares/validateSchema.js'
import userSchema from '../schemas/userSchema.js'
import logoutSchema from '../schemas/logoutSchema.js'
import * as controller from '../controllers/userController.js'

const userRouter = Router()

userRouter.post('/sign-up', validateSchema(userSchema), controller.register)
userRouter.post('/sign-in', validateSchema(userSchema), controller.logIn)
userRouter.post('/sign-out', validateSchema(logoutSchema), controller.logOut)

export default userRouter;
