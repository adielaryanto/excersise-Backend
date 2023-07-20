const express = require('express');
const router = express.Router();

const data = require('../lagu.json');
const Playlist = require('../models/Playlist');

const yourPlaylist = new Playlist(data.playlist);

router.get('/filter', (req, res) => {
  const { artist } = req.query;
  const filteredPlaylist = yourPlaylist.filterSongsByArtist(artist);
  res.json(filteredPlaylist);
});

router.get('/', (req, res) => {
  res.json(yourPlaylist.artist);
});

router.get('/allArtists', (req, res) => {
  res.json(data.playlist.artists);
});

router.post('/add', (req, res) => {
  const { artist, type, origin } = req.body;
  yourPlaylist.addArtist(artist, type, origin);
  res.json({
    message: 'Artist has been added',
    song: yourPlaylist.songs[yourPlaylist.songs.length - 1],
  });
});

router.get('/play/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < yourPlaylist.songs.length) {
    const song = yourPlaylist.songs[index];
    song.playCount++;
    res.json({ message: 'Music has been played', song });
  } else {
    res.status(404).json({ message: 'Music hasnt been input yet' });
  }
});

module.exports = router;