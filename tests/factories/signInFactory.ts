import { faker } from '@faker-js/faker'

export default function generateSignInBody() {
  return {
    email: faker.internet.email(),
    password: faker.lorem.word(6)
  }
}