const express = require('express');
const router = express.Router();

// Define user routes
router.get('/', (req, res) => {
  res.send('Admin Dashboard');
});

router.get('/profile', (req, res) => {
  res.send('Admin Profile');
});

module.exports = router;
