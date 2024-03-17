

const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require("axios");


routes.use(bodyParser.urlencoded({extended: true}))


routes.get('/', async(req, res)=>{
    async function getImages() {
          const response = await axios(`https://api.unsplash.com/search/photos?page=1&query=office&client_id=${process.env.API_KEY}`)
          var data = await response.data;
          console.log(data)
          data = data.results;
          console.log(data)
          res.render('unsplash', {data: data});
    
    }
    await getImages();
    
})

routes.post('/', async (req, res)=>{
  const search = req.body.text;

  async function searchImages() {
      const response = await axios(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${process.env.API_KEY}`
      );
      var data = await response.data;
      data = data.results;
      res.render('unsplash', {data: data});
   }
   await searchImages();

})

module.exports = routes;
