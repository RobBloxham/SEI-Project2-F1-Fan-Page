const Driver = require('../models/driver')
const User = require('../models/user');
const axios = require('axios')


module.exports = {
    index,
  }

function index(req, res) {
    axios
        .get("http://ergast.com/api/f1/2020/drivers.json")
        .then((response) => {
            // console.log(response.data.MRData.DriverTable.Drivers)
            res.render('drivers/index', {
                user: req.user,
                drivers: response.data.MRData.DriverTable.Drivers
            }) 
        })
        .catch ((err) => console.log(err))
}