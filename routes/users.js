var router = require('express').Router();
var usersCtrl = require('../controllers/users');


router.get('/', isLoggedIn, usersCtrl.index)
router.get('/profile', isLoggedIn, usersCtrl.showProfile)
router.put('/profile', isLoggedIn, usersCtrl.update)
router.get('/getName', isLoggedIn, usersCtrl.getName)
router.get('/:id', isLoggedIn, usersCtrl.show)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;
