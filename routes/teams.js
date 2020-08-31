const router = require('express').Router()
const teamsCtrl = require('../controllers/teams')

router.get('/', isLoggedIn, teamsCtrl.index)
// router.get('/new', driversCtrl.new)
// router.get('/show', isLoggedIn, driversCtrl.show)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;