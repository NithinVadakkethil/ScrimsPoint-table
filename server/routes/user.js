const express = require('express');
const router = express.Router();

// Define user routes
router.get('/', (req, res) => {
  res.send('User Dashboard');
});

router.get('/profile', (req, res) => {
  res.send('User Profile');
});

module.exports = router;
