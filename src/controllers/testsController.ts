import { Request, Response } from 'express'
import * as service from '../services/testsService.js'

export async function testsByDisciplines( req : Request, res : Response ) {
  const tests = await service.getTestsByDisciplines()

  res.send(tests)
}

export async function testsByTeachers( req : Request, res : Response ) {
  const tests = await service.getTestsByTeachers()

  res.send(tests)
}