import { Router } from 'express'
import validateToken from '../middlewares/validateToken.js'
import * as controller from '../controllers/testsController.js'

const testsRouter = Router()

testsRouter.get('/tests/disciplines', validateToken, controller.testsByDisciplines)
testsRouter.get('/tests/teachers', validateToken, controller.testsByTeachers)

export default testsRouter