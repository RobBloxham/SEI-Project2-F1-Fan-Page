const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teamSchema = new Schema({
    id: String,
    name: String,
    url_official: String,
    foundation_year: String,
    location: String,
    car_name: String,
    president: String,
    sports_director: String,
    technical_director: String,
})

module.exports = mongoose.model('Team', teamSchema)