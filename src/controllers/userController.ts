import { Request, Response } from 'express'
import * as service from '../services/userService.js'

export async function  register( req : Request, res : Response ) {
  const user = req.body

  await service.register( user )

  res.sendStatus(201)
}

export async function logIn( req : Request, res : Response ) {
  const user = req.body

  const token = await service.logIn( user )

  res.status(200).send(token)
}

export async function logOut( req : Request, res : Response ) {
  const user = req.body

  const token = await service.logOut( user )

  res.sendStatus(200)
}