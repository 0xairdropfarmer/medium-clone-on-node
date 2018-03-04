/** require dependencies */
const express = require("express")
const routes = require('./routes/')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const path = require('path')
const cloudinary = require('cloudinary')

const app = express()
const router = express.Router()
//const url = process.env.MONGODB_URI || "mongodb://localhost:27017/medium"
const url ="mongodb://alc:alc@ds237855.mlab.com:37855/alc"

/** configure cloudinary */
cloudinary.config({
    cloud_name: 'chidumennamdi',
    api_key: '392481138676646',
    api_secret: '6vN978wHnfEr21pKrysWuu7_0UI'
})

/** connect to MongoDB datastore */
try {
    mongoose.connect(url, {
        //useMongoClient: true
    })    
} catch (error) {
    
}

let port = process.env.PORT || 5000

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});
app.use('/static',express.static(path.join(__dirname,'static')))
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use('/assets',express.static(path.join(__dirname,'assets')))

app.use('/api', router)
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});