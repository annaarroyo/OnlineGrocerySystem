const {MongoClient} = require('mongodb');
const dbName = 'customers'

/* The command to run this file from the root folder is: node database/connect.js */

async function main() {

    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://arroyo:arroyo@grocerydeliverysystem.hsobq.mongodb.net/GroceryDeliverySystem?retryWrites=true&w=majority";

    // create mongodb client from our uri
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try{

        await client.connect(); // connect to our mongodb client
        console.log("Connected to MongoDB!");
        
        const col = client.db(dbName).collection('account'); // get the 'account' table from the 'customers' database 

        /* finds all the rows in the account table */
        var getCustomerCollection = () => {
            return new Promise((resolve, reject) => {
                col.find({}).toArray(function(err, dbs) {
                    err ? reject(err) : resolve(dbs);
                });
            });
        };

        var result = await (getCustomerCollection()); // store the queries after getCustomerColletion() is finished executing
        console.log("Here are all the rows in the account table:"); 
        console.log(JSON.stringify(result, null, 2));

    } catch (e) {
        console.error(e);
    } 
    finally {
        await client.close();
    }
}

module.exports = main().catch(console.error); // run our database connection