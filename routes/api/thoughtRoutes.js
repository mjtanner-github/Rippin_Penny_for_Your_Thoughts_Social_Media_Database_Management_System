const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');

// GET to get all thoughts
// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
// /api/thoughts
router
  .route('/')
  .get(getThoughts)
  .post(createThought);

// GET to get a single thought by its _id
// PUT to update a thought by its _id
// DELETE to remove a thought by its _id
// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// POST to create a reaction stored in a single thought's reactions array field
// /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(createReaction)

// DELETE to pull and remove a reaction by the reaction's reactionId value
// /api/thoughts/:thoughtId/reactions  
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);


module.exports = router;









