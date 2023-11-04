const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://subhajitmondal07059:foodplaza@cluster0.enjcnjk.mongodb.net/plaza retryWrites=true&w=majority' 

module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {

        if (err) console.log("---" + err)
        else {
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("mern");
            foodCollection.find({}).toArray(async function (err, data) {
            

                })
            });
            
        }
    
        
       
