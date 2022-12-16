const express = require('express')
const cors= require('cors')
const mongoDbClient= require('./mongoClient')
const app = express()
const port = 4000

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello Express!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  //connecter notre bdd à notre application
  mongoDbClient.initialyze()
})