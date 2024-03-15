const express = require("express");
const port = 3000;
const app = express();
const path = require('path');
const apiroute = require('./router/api');
const bodyparser = require("body-parser");


app.use('/apiroutes', apiroute)
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended: false}))






app.get('/', (req, res)=>{
    res.redirect("/apiroutes")
})









app.listen(port, (req, res)=>{
    console.log(`app open on port ${3000}`)
})