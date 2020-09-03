const Message = require('../models/message')

module.exports = {
  index,
  create,
  show,
  reply,
  removeMessage
}

function reply(req, res) {
  req.body.postedBy = req.user.name
  req.body.avatar = req.user.avatar
  Message.findById(req.params.id)
  .then((message) => {
    message.replies.push(req.body)
    message.save()
    .then( ()=> {
      res.redirect(`/messages/${req.params.id}`)
    })
  })
}

function show(req, res) {
  Message.findById(req.params.id)
  .then((message) => {
    res.render('messages/show', {
      title: 'Message Details',
      user: req.user,
      message
    })
  })
}

function create(req, res) {
  req.body.postedBy = req.user.name
  req.body.avatar = req.user.avatar
  Message.create(req.body)
  .then( () => {
    res.redirect('/messages')
  })
}

function index(req, res) {
  Message.find({})
  .then((messages) => {
    res.render('messages/index', {
      title: 'Message Board',
      user: req.user,
      messages: messages.reverse()
    })
  })
}

function removeMessage(req, res){
  Message.findByIdAndDelete(req.params.id)
  .then ((message) => 
  res.redirect('/messages')
  )
}