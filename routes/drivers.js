const router = require('express').Router()
const driversCtrl = require('../controllers/drivers')

router.get('/', isLoggedIn, driversCtrl.index)
router.post('/:id', isLoggedIn, driversCtrl.create)
// router.get('/new', driversCtrl.new)
// router.get('/show', isLoggedIn, driversCtrl.show)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;