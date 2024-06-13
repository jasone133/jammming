import React from "react";
import styles from './Track.module.css'

function Track(props) {

    const onAddTrack = () => {
        props.addTrack(props.track);
    }

    const onRemoveTrack = () => {
        props.removeTrack(props.track)
    }

    const trackButton = () => {
        if(props.isRemove !== undefined) {
            return (<div className={styles.trackButton} onClick={onRemoveTrack}>-</div>);
        }

        return (<div className={styles.trackButton} onClick={onAddTrack}>+</div>);
    }

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.name}>{props.track.name}</div>
                <div className={styles.details}>{props.track.artist} | {props.track.album}</div>
            </div>

            {trackButton()}
            
        </div>
    );
}

export default Track;