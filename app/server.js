const chokidarSocketEmitter = require('chokidar-socket-emitter')
const express = require('express')
var http = require('http')

const app = express()
app.server = http.createServer(app)
const port = process.env.PORT || 8000

app.use(express.static(`${__dirname}/client`))
app.get('/', (res, req) => res.sendFile(`${__dirname}/client/index.html`))

if (app.get('env') === 'development') chokidarSocketEmitter({app: app.server})

app.server.listen(port, () => console.log(
  `👟  Server running in ${app.get('env')} mode\n` +
  `👂  Listening on port ${port}`
  )
)