const User = require('../models/user');
const Driver = require('../models/driver');
const Team = require('../models/team')


module.exports = {
  index,
  update,
  showProfile,
  show,
  getName
}

function getName(req, res) {
  res.json(req.user.name)
}

function index(req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', { title: 'Profiles', user: req.user, users })
  })
}

function show(req, res) {
  User.findById(req.params.id)
  .populate("favoriteDriver")
  .populate("favoriteTeam")
  .then((userInfo) => {
    res.render('users/show', {
      title: 'User Details',
      userInfo,
      user: req.user,
      favoriteDriver: userInfo.favoriteDriver,
      favoriteTeam: userInfo.favoriteTeam
    })
  })
  .catch((err) => console.log(err))
}

function showProfile(req, res) {
  User.findById(req.user._id).populate('favoriteDriver').then((user) => {
      res.render('users/profile', { title: 'Profile Page', user })
    }
  )
}

  function update(req, res) {
    User.findByIdAndUpdate(req.user._id, req.body, { new: true }).then(() => {
      res.redirect('/users/profile')
    })
  }