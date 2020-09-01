const router = require('express').Router()
const driversCtrl = require('../controllers/drivers')

router.get('/', isLoggedIn, driversCtrl.index)
router.get('/:id', isLoggedIn, driversCtrl.show)
router.post('/:id', isLoggedIn, driversCtrl.create)



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;