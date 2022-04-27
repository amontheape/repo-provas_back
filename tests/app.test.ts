import app from '../src/app.js'
import supertest from 'supertest'
import { client } from '../src/database.js'
import config from '../src/config.js'
import generateSignInBody from './factories/signInFactory.js'
import generateSignUpBody from './factories/signUpFactory.js'

beforeEach( async () => {
  await client.$executeRaw`TRUNCATE TABLE sessions;`
  await client.$executeRaw`TRUNCATE TABLE users;`
})

afterAll( async () => {
  await client.$disconnect()
})

describe('testing login', () => {
  it('should return status 200', async () => {
    const body = generateSignInBody()

    const response = await supertest(app).post('/sign-in').send(body)

    expect(response.status).toBe(200)
  })
})

describe('testing register', () => {
  it('should return status 201', async () => {
    const body = generateSignUpBody()

    const response = await supertest(app).post('/sign-up').send(body)
    const createdUser = await client.user.findFirst({
      where : {
        email : body.email
      }
    })

    expect(response.status).toBe(201)
    expect(createdUser).not.toBeNull()
  })
})