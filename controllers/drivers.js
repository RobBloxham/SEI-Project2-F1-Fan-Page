const Game = require('../models/drivers')
const axios = require('axios')
const Driver = require('../models/driver')
const api_key= process.env.API_KEY


function index(req, res) {
    Driver.find(`https://api.sportradar.us/formula1/trial/v2/en/competitors/${req.params.id}/profile.json?api_key=${api_key}`)
}