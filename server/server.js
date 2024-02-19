const express = require('express')
const app = express()
const port = 1111

app.get('/', (req, res) => {
    res.send('god help me!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
