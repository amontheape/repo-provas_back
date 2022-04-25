import { Router } from 'express'
import validateSchema from '../middlewares/validateSchema.js'
import userSchema from '../schemas/userSchema.js'

const userRouter = Router()

userRouter.post('/sign-up', validateSchema(userSchema))

export default userRouter;
