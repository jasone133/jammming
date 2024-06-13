import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import React, {useState} from 'react';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../Spotify';
import SearchResults from '../SearchResults/SearchResults';

function App() {
  const [tracklist, setTracklist] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  
  const submitSearch = (search) =>{
    Spotify.searchSongs(search).then(setTracklist);
    console.log(tracklist);
  }

  const addTrack = (track) => {
    if(!playlist.some(t => track.id === t.id)){
      setPlaylist((tracks) => [track, ...tracks])
      console.log(playlist);
    }
    
  }

  const removeTrack = (trackId) => {
    setPlaylist((tracks) => tracks.filter((track) => track.id !== trackId.id));
  }

  const savePlaylist = () => {
    const uris = playlist.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, uris).then(() => {
      setPlaylist([]);
      setPlaylistName("New Playlist");
    })
  }


  return (
    <div className={styles.main}>
      <h1 className={styles.header}>
        Ja<span className={styles.text}>mmm</span>ing
      </h1>
      <SearchBar submitSearch={submitSearch} />
      <div className={styles.lists}>
        <SearchResults tracklist={tracklist} addTrack={addTrack} />
        <Playlist playlist={playlist} removeTrack={removeTrack} isRemove={true} playlistName={playlistName} setPlaylistName={setPlaylistName} savePlaylist={savePlaylist} />
      </div>
    </div>
  );
}

export default App;
