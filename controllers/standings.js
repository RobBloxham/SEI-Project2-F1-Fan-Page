const axios = require('axios')

module.exports = {
    index
}

function index(req, res){
    axios
        .get('http://ergast.com/api/f1/current/driverStandings.json')
        .then((response) => {
            console.log(response)
        })
        res.render("standings/index", {
            user: req.user
        })
        .catch(err => console.log(err))
}