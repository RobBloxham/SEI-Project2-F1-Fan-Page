const Game = require('../models/drivers')
const axios = require('axios')
const Driver = require('../models/driver')
const api_key= process.env.API_KEY

module.exports = {
    show,
  }

//    `https://api.sportradar.us/formula1/trial/v2/en/competitors/${req.params.id}/profile.json?api_key=${api_key}`

function show(req, res) {
    axios
        .get(`https://api.sportradar.us/formula1/trial/v2/en/sport_events/sr:stage:547803/summary.json?api_key=${api_key}`)
        .then(
            res.render("drivers/show", {
                
            })
        )

}