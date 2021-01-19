//jshint esversion:6
const express = require('express')
const bodyParser = require('body-parser')
let PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.use('/', require('./routes/home'))
app.use('/api/login', require('./routes/login'))
app.use('/api/register', require('./routes/signup'))

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} http://localhost:${PORT}`);
})