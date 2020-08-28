const router = require('express').Router();
const chatCtrl = require('../controllers/chat');

router.get('/', isLoggedIn, chatCtrl.chatRoom);
router.post('/', isLoggedIn, chatCtrl.postChat);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;