import styles from './Tracklist.module.css';
import Track from '../Track/Track';
import React from 'react';

function Tracklist(props) {


  return (
    <>
    <div className={styles.container}>
        <ul >
          {props.tracklist.map((track) => (
            <Track key={track.id} track={track} addTrack={props.addTrack} removeTrack={props.removeTrack} isRemove={props.isRemove}/>
          ))}
        </ul>
    </div>
    
    </>
  );
}

export default Tracklist;
