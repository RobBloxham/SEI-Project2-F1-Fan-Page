const router = require("express").Router();
const messagesCtrl = require("../controllers/messages");

router.get('/',  messagesCtrl.index);
router.post('/', isLoggedIn, messagesCtrl.create);
router.get('/:id', isLoggedIn, messagesCtrl.show);
router.post('/:id', isLoggedIn, messagesCtrl.reply);
router.delete('/:id', isLoggedIn, messagesCtrl.removeMessage)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
