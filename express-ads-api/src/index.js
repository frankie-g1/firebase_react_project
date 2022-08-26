//import dependcies

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

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
    await mongoose.connect('mongodb://0.0.0.0:27017/test')

    const userSchema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        permissionLevel: Number
    })

    const User = mongoose.model('User', userSchema)


    const Joe = new User({firstName:"Joe", lastName:"Joe", email:"Joe", password:"Joe", permissionLevel:1})

    console.log(Joe.firstName)
}