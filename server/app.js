/** require dependencies */
const express = require("express")

const app = express()
let port = 5000 || process.env.PORT
app.get('/', (req, res) => {
    res.send('Yay')
})
app.listen(port, () => {
    console.log(`Server started at: ${port}`)
});