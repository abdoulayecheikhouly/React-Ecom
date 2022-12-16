const e = require('express')
const mongoose= require('mongoose')
const DB = 'Marketplace'
//const URI = `const URI ="mongodb+srv://cheikou:123@cluster0.ciuh2po.mongodb.net/${DB}?retryWrites=true&w=majority`
const URI ="mongodb+srv://cheikou:123@cluster0.ciuh2po.mongodb.net/Marketplace?retryWrites=true&w=majority"

//creation de l'objet de connection

const mongoDbClient= {
    //fonction de connection
    initialyze:() =>{
        try {
            const client = mongoose.connect(URI, 
                { 
                    useNewUrlParser: true, 
                    useUnifiedTopology: true
                })
            client.then(() => console.log(`🎉 🎉 successfully connected to DB: ${DB}`))
            
        } catch (e) {
            throw Error(e)
            
        }
    }
}
module.exports = mongoDbClient