import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';
import React from 'react';

function SearchResults(props) {


  return (
    <>
    <div className={styles.container}>
        <div className={styles.title}>Results</div>
        <Tracklist tracklist={props.tracklist} addTrack={props.addTrack}/>
    </div>
    
    </>
  );
}

export default SearchResults;
