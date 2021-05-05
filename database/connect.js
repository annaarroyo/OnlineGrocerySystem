const {MongoClient} = require('mongodb');
const { validationResult } = require('express-validator');
const dbName = 'customers'
const uri = "mongodb+srv://arroyo:arroyo@grocerydeliverysystem.hsobq.mongodb.net/GroceryDeliverySystem?retryWrites=true&w=majority";
var db;
var productDB;
var col;
var productCol;

MongoClient.connect( uri, { useUnifiedTopology: true }, { useNewUrlParser: true }, function( err, client ) {
    if (err) throw err;
    console.log("Connected to MongoDB.");
    db  = client.db(dbName);
    col = client.db(dbName).collection('account'); // get the 'account' table from the 'customers' database
    productDB = client.db('products');
    productCol = productDB.collection('items');
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
            //console.log("Response from GET /login/:user: ");
            //console.log(JSON.stringify(response));
            return res.status(200).send(JSON.stringify(response));
        }).catch((error) => {
            const response = { message: error.message };
            console.error(response);
            return res.status(404).send(JSON.stringify(response));
        })
	},
    saveAccount: (req, res) => {
        console.log("Saving new credentials...");

        const errors = validationResult(req);
        if(!errors.isEmpty()){
          return res.status(400).jsonp(errors.array().map(error => {
            return {message: error.msg}
          }));
        }
        var info = req.body;
        col.insertOne({
          email: info.email,
          password: info.password,
          firstName: info.firstName,
          lastName: info.lastName,
          phoneNumber: info.phoneNumber
        }).then((postResponse) => {
          const response = postResponse;
          //console.log(response);
          return res.status(200).send(response);
      }).catch((error) => {
          const response = { message: error.message };
          console.error(response);
          console.log(response);
          return res.status(404).send(response);
        })
      },
    getDatafromDB: (req,res) => {
      console.log("Getting data.... ");
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        return res.status(400).jsonp(errors.array().map(error => {
          return {message: error.msg}
        }));
      }
    var data =[]
    data = productCol.find({});
    return res.status(200).send(data);
    }
};
