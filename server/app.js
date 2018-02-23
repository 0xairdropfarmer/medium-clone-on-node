/** require dependencies */
const express = require("express")
const routes = require('routes')

const app = express()
const router = express.Router()

let port = 5000 || process.env.PORT

app.use('/api', routes())
app.listen(port, () => {
    console.log(`Server started at: ${port}`)
});