const axios = require('axios')

module.exports = {
    index
}

function index(req, res){
    let one = 'http://ergast.com/api/f1/current/driverStandings.json'
    let two = 'http://ergast.com/api/f1/current/constructorStandings.json'

    const requestOne = axios.get(one)
    const requestTwo = axios.get(two)
    axios
        .all([requestOne, requestTwo])
        .then(axios.spread((...responses) => {
            const drivers = responses[0]
            const constructors = responses[1]
            res.render("standings/index", {
            user: req.user,
            drivers: responses[0].data.MRData.StandingsTable.StandingsLists[0].DriverStandings,
            constructors: responses[1].data.MRData.StandingsTable.StandingsLists[0].ConsturctorStandings
            })
        }))
        .catch(err => console.log(err))
}
        
