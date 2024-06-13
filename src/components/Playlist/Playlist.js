import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';
import React from 'react';

function Playlist(props) {


  return (
    <>
    <div className={styles.container}>
        <input className={styles.playlistName} value={props.playlistName} onChange={(e) => props.setPlaylistName(e.target.value)}/>
        <Tracklist tracklist={props.playlist} removeTrack={props.removeTrack} isRemove={props.isRemove}/>
        <div className={styles.center}>
          <button className={styles.saveButton} onClick={props.savePlaylist}>Save To Spotify</button>
        </div>
    </div>
    
    </>
  );
}

export default Playlist;
