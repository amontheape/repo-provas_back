import bcrypt from 'bcrypt';
import * as userRepository from '../repositories/userRepository.js'

export async function register( { email, password }: userRepository.User ) {
  const userExists = await userRepository.findByEmail( email )
  if ( userExists ) throw { type: 'conflict', message: 'this email has already been registered' }

  const passwordHash = bcrypt.hashSync( password, 10 );

  await userRepository.createUser( { email, password: passwordHash } )
}