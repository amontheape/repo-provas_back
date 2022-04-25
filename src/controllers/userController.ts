import { Request, Response } from 'express'
import * as service from '../services/userService.js'

export async function  register( req : Request, res : Response ) {
  const user = req.body

  await service.register( user )

  res.sendStatus(201)
}