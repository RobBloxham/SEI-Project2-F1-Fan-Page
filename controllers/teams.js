const Team = require('../models/team')
const api_key= process.env.API_KEY
const axios = require('axios')


module.exports = {
    index,
    create,
    show
}

function show(req, res) {
    Team.findById(req.params.id)
    .then((teams) => {
        res.render('teams/show', {
        user: req.user,
        teams: teams       
        })      
    })
}



function index(req, res) {
  Team.find({})
  .then((teams) => {
      res.render("teams/index", {
          user: req.user,
          teams
      })   
  })
  .catch((err) => console.log(err))
}

function create(req, res) {
    axios
        .get(`https://api.sportradar.us/formula1/trial/v2/en/competitors/${req.params.id}/profile.json?api_key=${api_key}`)
        .then((response) => {
            Team.create({
            "name": response.data.team.name,
            "url_official": response.data.info.url_official,
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