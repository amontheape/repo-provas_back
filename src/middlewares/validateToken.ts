import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import * as sessionRepository from '../repositories/sessionRepository.js'


export default async function validateToken( req : Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers
  const token = authorization?.replace("Bearer", "")
  if ( !token ) throw { type: 'unauthorized', message: 'invalid token'}

  const sessionExists = await sessionRepository.findByToken( token )
  if ( !sessionExists ) throw { type: 'unauthorized', message: 'invalid token'}

  jwt.verify( token, config.secretJWT, (err) => { 
    console.log(err)
    throw { type: 'unauthorized', message: 'token does not match requirements'} } 
  )

  res.locals.user = { userId: sessionExists.userId }

  next()
}