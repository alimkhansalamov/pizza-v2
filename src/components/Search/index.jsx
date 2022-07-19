import React from 'react';
import styles from './Search.module.scss';
import Icon from './../../assets/img/search.svg';
import Close from './../../assets/img/close.svg';
import { SearchContext } from './../../App';
const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div className={styles.root}>
      <img className={styles.icon} src={Icon} alt="search icon" />
      <input
        value={searchValue}
        className={styles.input}
        placeholder="Search ..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          className={styles.close}
          src={Close}
          alt="close icon"
        />
      )}
    </div>
  );
};

export default Search;
