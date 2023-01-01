const port = 4000
const express = require('express')
const cors= require('cors')
const mongoDbClient= require('./mongoClient')
const {graphqlHTTP}= require('express-graphql')
const schema=require('./schemas/index.js')
const app = express()


app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello Express!')
})
 
//API REST
const Product = require('./models/product');
//const { schema } = require('./models/product')

app.get('/products/',async(req,res)=>{

  const products= await Product.find({})
      
  try {
    res.send(products)
  } catch (e) {
    res.status(500).send(err)
  }
})

//Produit par catégorie
app.get('/products/:category',async(req,res)=>{

 const category = req.params.category
 const products = await Product.find({ category : category})
      
  try {
    res.send(products)
  } catch (e) {
    res.status(500).send(err)
  }
})

//GraphQL UI
app.use('/graphql', graphqlHTTP({
  schema:schema,
  graphiql: true,
}));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  //connecter notre bdd à notre application
  mongoDbClient.initialyze()
})