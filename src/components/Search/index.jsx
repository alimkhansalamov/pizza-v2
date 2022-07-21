import React from 'react';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';
import Icon from './../../assets/img/search.svg';
import Close from './../../assets/img/close.svg';
import { SearchContext } from './../../App';
const Search = () => {
  console.log(debounce);
  const { searchValue, setSearchValue } = React.useContext(SearchContext); // value in delaying function
  const [inputValue, setInputValue] = React.useState(); // to show user what's being written in input, controlled component
  const inputRef = React.useRef();

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 200),
    [],
  );
  const onChangeInputValue = (event) => {
    setInputValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickClear = () => {
    setInputValue('');
    setSearchValue('');
    inputRef.current.focus();
  };
  return (
    <div className={styles.root}>
      <img className={styles.icon} src={Icon} alt="search icon" />
      <input
        ref={inputRef}
        value={inputValue}
        className={styles.input}
        placeholder="Search ..."
        onChange={onChangeInputValue}
      />
      {searchValue && (
        <img onClick={onClickClear} className={styles.close} src={Close} alt="close icon" />
      )}
    </div>
  );
};

export default Search;
