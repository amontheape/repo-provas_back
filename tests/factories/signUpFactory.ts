import { faker } from '@faker-js/faker'

export default function generateSignUpBody() {
  return {
    email: faker.internet.email(),
    password: faker.lorem.word(6)
  }
}