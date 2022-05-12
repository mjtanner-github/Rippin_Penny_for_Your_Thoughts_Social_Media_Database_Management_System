const { ObjectId } = require('mongoose').Types;
const { User } = require('../models');


module.exports = {
  
  // Get all users
  getUsers(req, res) {
    User.find()
      .select('-__v')
      .then(async (users) => {
        return res.json(users);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No such user.' })
          : res.json({user})
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  
  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  
  // Update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },req.body,
      { runValidators: true, new: true })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Delete a user
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then(() => res.json({meassage: "User deleted."}))
      .catch((err) => res.status(500).json(err));
  },

  // Add a friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      {$push: {friends: req.params.friendId}},
      { runValidators: true, new: true }
    )
    .then((friend) => res.status(200).json(friend))
    .catch((err) => res.status(500).json(err));
  },

  // Delete a friend
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      {$pull: {friends: req.params.friendId}},
      {runValidators: true, new: true }
    )
  .then((friend) => res.status(200).json({message: 'Friend deleted.'}))
  .catch((err) => res.status(500).json(err));
  
}
};