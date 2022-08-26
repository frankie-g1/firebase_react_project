//import dependcies

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');


const credentials = 'D:\\project_pems\\firebase_js_project\\user_name-32\\X509-cert-3966428361570701940.pem'
const client = new MongoClient('mongodb+srv://cluster0.j1rgqgf.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1
});

const mongoose = require('mongoose')

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
    {title: 'Hello (again)'}
]

// adding Helmet to enhance your Rest API's security
app.use(helmet())

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json())

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'))

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send(ads)
})

// starting the server
app.listen(3001, () => {
    console.log('listening on port 3001')
})


main().catch(err => console.log(err))

async function main() {
    try {
        await client.connect();
        const database = client.db("test");
        const collection = database.collection("User");
        const docCount = await collection.countDocuments({});
        console.log(docCount);
        // perform actions using client
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }

}