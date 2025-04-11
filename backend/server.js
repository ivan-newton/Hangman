// Code for tracking wins and losses in mongoDB

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongodb:27017/hangman', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  username: String,
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
});

const User = mongoose.model('User', userSchema);

// Update win/loss stats
app.post('/update-stats', async (req, res) => {
  const { username, won } = req.body;

  let user = await User.findOne({ username });
  if (!user) user = new User({ username });

  won ? user.wins++ : user.losses++;
  await user.save();

  res.json({ username: user.username, winRate: (user.wins / (user.wins + user.losses)) || 0 });
});

// Get stats for a specific user
app.get('/stats/:username', async (req, res) => {
  const user = await User.findOne({ username: req.params.username });
  if (!user) return res.status(404).json({ message: 'User not found' });

  res.json({
    username: user.username,
    wins: user.wins,
    losses: user.losses,
    winRate: (user.wins / (user.wins + user.losses)) || 0
  });
});

app.listen(3001, () => console.log('✅ Backend running on port 3001'));
