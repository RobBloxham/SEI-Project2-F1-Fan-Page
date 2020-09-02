const mongoose = require('mongoose');
const Schema = mongoose.Schema

const favoriteTrack = new mongoose.Schema({
  favoriteTrack: String,
  aboutFavoriteTrack: String
})

const userSchema = new mongoose.Schema({
  name: String,
  alias: String,
  email: String,
  avatar: String,
  googleId: String,
  bio: String,
  favoriteDriver: [{ type: Schema.Types.ObjectId, ref: 'Driver'}],
  favoriteTeam: [{type: Schema.Types.ObjectId, ref: 'Team'}],
  favoriteTrack: [],
  aboutFavoriteTrack: String,
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);