const router = require('express').Router();
const {
  getUser,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/studentController');

// /api/users
router.route('/')
.get(getUser)
.post(createUser);

// /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// /api/users/:userId/assignments/:assignmentId
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;
