import { client } from '../database.js'

export interface User {
  email: string
  password : string
}

export async function createUser( user : User ) {
  await client.user.create({
    data: user
  })
}

export async function findByEmail( email : string ) {
  return await client.user.findUnique({
    where: {
      email
    }
  })
}