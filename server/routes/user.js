const express = require('express');
const router = express.Router();
const { getTeamDetails, registerTeam } = require('../controllers/userController')

// Define user routes
router.get('/', getTeamDetails);
router.post('/details', registerTeam);

module.exports = router;