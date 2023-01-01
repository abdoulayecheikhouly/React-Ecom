const port = 4000
const express = require('express')
const cors= require('cors')
const mongoDbClient= require('./mongoClient')
const app = express()

 
//API REST
const Product = require('./models/product');

app.get('/products/',async(req,res)=>{

  const products= await Product.find({})
      
  try {
    res.send(products)
  } catch (e) {
    res.status(500).send(err)
  }
})
app.get('/products/:category',async(req,res)=>{

 const category = req.params.category
 const products = await Product.find({ category : category})
      
  try {
    res.send(products)
  } catch (e) {
    res.status(500).send(err)
  }
})

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello Express!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  //connecter notre bdd à notre application
  mongoDbClient.initialyze()
})