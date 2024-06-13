import styles from './SearchBar.module.css';
import React, {useState} from 'react';

function SearchBar(props) {
  const [text, setText] = useState('');

  const handleTextChange = ({target}) => {
    setText(target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(text.length > 0){
      props.submitSearch(text);
    }
  }


  return (
    <>
    <form className={styles.container} onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={handleTextChange} className={styles.input} placeholder='Enter A Song Title' />
        <button type='submit' className={styles.searchButton}>Search</button>
    </form>
    
    </>
  );
}

export default SearchBar;
