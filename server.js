const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.url = req.url.toUpperCase();
  next();
});

const playlistRoutes = require('./routes/playlistRoutes');
const genreRoutes = require('./routes/genreRoutes');

app.use('/playlist', playlistRoutes);
app.use('/genres', genreRoutes);

app.listen(port, () => {
  console.log(`link localhost di : http://localhost:${port}`);
});
