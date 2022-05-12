const { default: mongoose } = require('mongoose');
const { Thought } = require('../models');

module.exports = {

  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .select('-__v')
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No such thought' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) => res.status(200).json({ message: 'Thought deleted.' }))
      .catch((err) => res.status(500).json(err));
  },

  // Add a reaction
    createReaction(req, res) {
      const reactionId = mongoose.Types.ObjectId();
      const reactionBody = req.body.reactionBody;
      const username = req.body.username;
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        {$push: {reactions: {reactionId:reactionId, reactionBody:reactionBody, username:username}}},
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res
                .status(404)
                .json({ message: 'No such thought' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    // Remove a reaction
    deleteReaction(req, res) {
      const reactionId = req.params.reactionId;
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: {reactionId: reactionId } } },
        { runValidators: true, new: true }
      )
        .then((student) =>
          !student
            ? res
                .status(404)
                .json({ message: 'No such reaction' })
            : res.json(student)
        )
        .catch((err) => res.status(500).json(err));
    },

};
