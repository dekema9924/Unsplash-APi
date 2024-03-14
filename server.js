const express = require("express");
const port = 3000;
const app = express();
const path = require('path')
require('dotenv').config()



app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')))





app.get('/', (req, res)=>{
    res.render("unsplash.ejs")
})









app.listen(port, (req, res)=>{
    console.log(`app open on port ${3000}`)
})