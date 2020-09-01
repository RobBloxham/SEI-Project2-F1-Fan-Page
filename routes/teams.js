const router = require('express').Router()
const teamsCtrl = require('../controllers/teams')

router.get('/', isLoggedIn, teamsCtrl.index)
router.get('/:id', isLoggedIn, teamsCtrl.show)
router.post('/:id', isLoggedIn, teamsCtrl.create)



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;