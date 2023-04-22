const express = require('express');
const router = express.Router();

const userController = require('../controllers/user-contoller');

router.post('/signup',userController.create);
router.post('/signin',userController.signIn);
router.patch('/update',userController.updateData);
router.get('/participants',userController.getAll);
router.get('/leaderboards',userController.getTopScorer);

module.exports = router;