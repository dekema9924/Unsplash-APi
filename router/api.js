

const express = require('express');
const routes = express.Router();
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

routes.use(bodyParser.urlencoded({extended: false}))


routes.get('/', async(req, res)=>{
    async function getImages() {
        try {
          const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=office&client_id=${process.env.API_KEY}`
          );
          const data = response.data.results
          res.render('unsplash.ejs', {data: data});

        } catch (error) {
          console.error(error);
        }    
    }
    getImages();
    
})

routes.post('/', async (req, res)=>{
  const search = req.body.text;

  async function getImages() {
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${process.env.API_KEY}`
      );
      const data = response.data.results
      res.render('unsplash.ejs', {data: data});
    } catch (error) {
      console.error(error);
    }
  }

await getImages();

})










module.exports = routes;