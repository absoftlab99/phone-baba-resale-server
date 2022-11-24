const express = require('express')
const port = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
    res.send('Api Running')
})
app.listen(port, () => {
    console.log(`Mobile Baba app listening on port ${port}!`)
})