import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import config from '../config.js';
import * as userRepository from '../repositories/userRepository.js'
import * as sessionRepository from '../repositories/sessionRepository.js'

export async function register( { email, password }: userRepository.User ) {
  const userExists = await userRepository.findByEmail( email )
  if ( userExists ) throw { type: 'conflict', message: 'this email has already been registered' }

  const passwordHash = bcrypt.hashSync( password, 10 );

  await userRepository.createUser( { email, password: passwordHash } )
}

export async function logIn( { email, password } : userRepository.User ) {
  const userExists = await userRepository.findByEmail( email )
  if ( !userExists || !bcrypt.compareSync( password, userExists.password ) ) throw { type: 'unauthorized', message: 'wrong email or password' }

  const sessionExists = await sessionRepository.findByUserId( userExists.id )
  
  if ( sessionExists ) {
    jwt.verify( sessionExists.token, config.secretJWT, ( err ) => { 
      console.log(err)
      throw { type: 'unauthorized', message: 'token does not match requirements'}
    } )
    return { token: sessionExists.token }
  }

  const token = jwt.sign( { userId: userExists.id }, config.secretJWT, { expiresIn: 60*60*24 } )

  await sessionRepository.createSession( { userId: userExists.id, token } )

  return { token }
}

export async function logOut( token : string ) {
  const sessionExists = await sessionRepository.findByToken( token )

  if ( sessionExists ) {
    await sessionRepository.removeSession( sessionExists.id )
  } throw { type: 'not_found', message: 'token not found'}
}