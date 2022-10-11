const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('index.html')
})

app.listen(80, () => {
    console.log(`Server started ${new Date()}`)
})