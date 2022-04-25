import 'dotenv/config'

interface Environment {
  port: string,
  secretJWT : string
}

export default <Environment>{
  port: process.env.PORT || 5000,
  secretJWT : process.env.SECRET_JWT
}