import app from './app.js' 
import config from './config.js'

app.listen( config.port, () => {
  console.log(`App running on PORT ${config.port} `)
})