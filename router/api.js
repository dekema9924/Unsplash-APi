

const express = require('express');
const routes = express.Router();
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();


routes.use(bodyParser.urlencoded({extended: false}))


routes.get('/', async(req, res)=>{
    async function getImages() {
        try {
          const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=office&client_id=${process.env.API_KEY}`);
          var data = await response.json()
          data = data.results;
          res.render('unsplash.ejs', {data: data});

        } catch (error){
          console.error(error);
        }    
    }
    getImages();
    
})

routes.post('/', async (req, res)=>{
  const search = req.body.text;

  async function getImages() {
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${process.env.API_KEY}`
      );
      var data = await response.json();
      data = data.results;
      console.log(data)
      res.render('unsplash.ejs', {data: data});
    } catch (error) {
      console.error(error);
    }
  }

await getImages();

})










module.exports = routes;
