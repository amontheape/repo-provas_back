import { client } from '../database.js'

export interface Token {
  userId: number, 
  token: string
}

export async function createSession( tokenData: Token ) {
  await client.session.create({
    data: tokenData
  })
}

export async function findByUserId( userId : number ) {
  return await client.session.findFirst({
    where: {
      userId
    }
  })
}

export async function findByToken( token : string ) {
  return await client.session.findFirst({
    where: {
      token : token
    }
  })
}

export async function removeSession( id : number ) {
  return await client.session.delete({
    where: {
      id
    }
  })
}
