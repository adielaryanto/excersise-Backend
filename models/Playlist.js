
class Playlist {
    constructor(songs) {
      this.songs = Array.isArray(songs) ? songs : [];
    }
  
    addArtist(artist, type, origin) {
      const newSong = new Song(artist, type, origin);
      this.songs.push(newSong);
    }
  
    filterSongsByArtist(artist) {
      return this.songs.filter(
        (song) =>
          song.artists &&
          song.artists.toLowerCase().includes(artist.toLowerCase())
      );
    }
  
    getMostPlayedSongs() {
      return this.songs.sort((a, b) => b.playCount - a.playCount);
    }
  }
  
  class Song {
    constructor(image, title, artists, url) {
      this.image = image;
      this.title = title;
      this.artists = artists;
      this.url = url;
      this.playCount = 0;
    }
  }
  
  module.exports = Playlist;