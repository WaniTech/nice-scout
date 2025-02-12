const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

// Example route to fetch jobs
app.get('/jobs', async (req, res) => {
  try {
    const jobs = await JobModel.find(); // Ensure JobModel is defined and imported
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});