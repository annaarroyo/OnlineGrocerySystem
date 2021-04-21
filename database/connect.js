const {MongoClient} = require('mongodb');
const { validationResult } = require('express-validator');
const dbName = 'customers'
const uri = "mongodb+srv://arroyo:arroyo@grocerydeliverysystem.hsobq.mongodb.net/GroceryDeliverySystem?retryWrites=true&w=majority";
var db;
var col;

MongoClient.connect( uri, { useUnifiedTopology: true }, { useNewUrlParser: true }, function( err, client ) {
    console.log("Connected to MongoDB.")
    db  = client.db(dbName);
    col = client.db(dbName).collection('account'); // get the 'account' table from the 'customers' database 
    if (err) throw err;
  });

module.exports = {
	checkLogin: (req, res) => {
        console.log("Checking login credentials...");

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).jsonp(errors.array().map(error => {
                return { message: error.msg }
            }));
        }
    
        const user = req.params.user;
        col.findOne({ email: user }).then((creds) => {
            const response = creds;
    
            console.log(response);
    
            return res.status(200).send(JSON.stringify(response));
        }).catch((error) => {
            const response = { message: error.message };
            console.error(response);
            console.log(response);
            return res.status(404).send(JSON.stringify(response));
        })
	}
};