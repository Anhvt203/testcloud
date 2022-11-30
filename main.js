const express = require('express')
const app = express()

app.set('view engine','hbs')

app.get('/', (req, res) => {
    const n = new Date().toLocaleTimeString()
    console.log("home duoc request luc: "+n)
    res.render('home',{now:n})
})

const POST = process.env.PORT || 3000
app.listen(POST)
console.log("My app us up")
