const Team = require('../models/team')
const api_key= process.env.API_KEY
const axios = require('axios')


module.exports = {
    index,
    create
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

function create(req, res) {
    axios
        .get(`https://api.sportradar.us/formula1/trial/v2/en/competitors/${req.params.id}/profile.json?api_key=${api_key}`)
        .then((response) => {
            Team.create({
            "name": response.data.team.name,
            "url": response.data.info.url_official,
            "foundation_year": response.data.info.foundation_year,
            "location": response.data.info.location,
            "car_name": response.data.info.car_name,
            "president": response.data.info.president,
            "sports_director": response.data.info.sports_director,
            "technical_director": response.data.info.technical_director,
            "debut": response.data.info.debut
            }
            )
        })
        .catch ((err) => console.log(err))
}