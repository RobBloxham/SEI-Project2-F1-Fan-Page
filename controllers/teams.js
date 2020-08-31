const Team = require('../models/team')
const api_key= process.env.API_KEY
const axios = require('axios')


module.exports = {
    index,
  }

  

function index(req, res) {
    axios
        .get(`https://api.sportradar.us/formula1/trial/v2/en/sport_events/sr:stage:547803/summary.json?api_key=${api_key}`)
        .then((response) => {
            // console.log(response.data.stage.teams)
            res.render('teams/index', {
                user: req.user,
                teams: response.data.stage.teams
            }) 
        })
        .catch ((err) => console.log(err))
}