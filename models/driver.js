const mongoose = require('mongoose')
const Schema = mongoose.Schema


const driverSchema = new Schema({
    id: String,
    name: String,
    nationality: String,
    height: String,
    weight: String,
    debut: Date
})

module.exports = mongoose.model('Driver', driverSchema)