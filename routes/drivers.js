const router = require('express').Router()
const driversCtrl = require('../controllers/drivers')

router.get('/', isLoggedIn, driversCtrl.index)
router.get('/:id', isLoggedIn, driversCtrl.show)
router.post('/:id', isLoggedIn, driversCtrl.create)
router.put('/:id', isLoggedIn, driversCtrl.addToFavoriteDriver)
router.delete('/:id', isLoggedIn, driversCtrl.removeFromFavoriteDriver)



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;