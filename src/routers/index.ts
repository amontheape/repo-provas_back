import { Router } from 'express'
import userRouter from './userRouter.js'
import testsRouter from './testsRouter.js'

const router = Router()

router.use(userRouter)
router.use(testsRouter)

export default router