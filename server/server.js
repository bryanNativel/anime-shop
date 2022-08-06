const jsonServer = require('json-server')
const middleware = jsonServer.defaults()
const server = jsonServer.create()

server.use(middleware);
server.use(jsonServer.bodyParser);

const animesData = require("../server/data/anime")

server.get('/api/animes', (req, res, nex) => {
  res.status(200).send(animesData.getAnimes)
})


server.listen(3000, () => {
  console.log('Fake server run on port 3000')
})
