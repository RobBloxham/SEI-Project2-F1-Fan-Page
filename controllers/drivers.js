const Driver = require('../models/driver')
const api_key= process.env.API_KEY
const axios = require('axios')


module.exports = {
    index,
    create,
    show
}

function show(req, res) {
    Driver.findById(req.params.id)
    .then((drivers) => {
        res.render('drivers/show', {
        user: req.user,
        drivers: drivers        
        })      
    })
}

function index(req, res) {
  Driver.find({})
  .then((drivers) => {
      res.render("drivers/index", {
          user: req.user,
          drivers: drivers
      })   
  })
  .catch((err) => console.log(err))
}

function create(req, res) {
    axios
        .get(`https://api.sportradar.us/formula1/trial/v2/en/competitors/${req.params.id}/profile.json?api_key=${api_key}`)
        .then((response) => {
            Driver.create({
            "name": response.data.competitor.name,
            "driverId": response.data.competitor.id,
            "team": response.data.teams[0].name,
            "nationality": response.data.competitor.nationality,
            "height": response.data.info.height,
            "weight": response.data.info.weight,
            "debut": response.data.info.debut
            }
            )
        })
}



// .then((drivers) => {
//     drivers.forEach(driver => {
//         axios
//             .get(`https://api.sportradar.us/formula1/trial/v2/en/competitors/${driver.id}/profile.json?api_key=${api_key}`)
//             .then((response) => {
//                 console.log(response.data)
//             })
//             .catch((err) => console.log(err))
//     })