const router = require('express').Router();
const {
  getThought,
  createThought,
  getSingleThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/courseController.js');

// /api/thoughts
router.route('/')
.get(getThought)
.post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

router.route('/:thoughtId/reactions')
.post(createReaction);

// /api/users/:userId/assignments/:assignmentId
router.route('/:thoughtId/reactions/:reaction')
.delete(deleteReaction);

module.exports = router;
