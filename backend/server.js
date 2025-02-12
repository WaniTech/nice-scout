const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://andersah24:<db_password>@scout-link.0za7c.mongodb.net/?retryWrites=true&w=majority&appName=scout-link', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const jobSchema = new mongoose.Schema({
  title: String,
  location: String,
});

const Job = mongoose.model('Job', jobSchema);

// Fetch all job listings
app.get('/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Add a new job (Optional for future)
app.post('/jobs', async (req, res) => {
  const newJob = new Job(req.body);
  await newJob.save();
  res.status(201).send('Job added!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
