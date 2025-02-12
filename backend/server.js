const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

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

app.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
