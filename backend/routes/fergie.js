// backend/routes/fergie.js

const express = require('express');
const router = express.Router();
const { matchCoachToClubs } = require('../controllers/fergieController');

// POST /api/fergie/match
router.post('/match', async (req, res) => {
  try {
    const coachProfile = req.body;
    const matches = await matchCoachToClubs(coachProfile);
    res.status(200).json(matches);
  } catch (error) {
    console.error('Fergie match error:', error);
    res.status(500).json({ error: 'Fergie failed to match.' });
  }
});

module.exports = router;
