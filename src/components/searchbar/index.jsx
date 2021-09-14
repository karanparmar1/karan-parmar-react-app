import React, { useEffect, useRef } from 'react';
import classes from './searchbar.module.css';

const SearchBar = ({ className, disabled, ...props }) => {
  const inputRef = useRef();

  const handleKeyDown = (e) => {
    // Detect ctrl+'/' or cmd+'/'
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  useEffect(() => {
    document?.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document?.removeEventListener('keydown', handleKeyDown, false);
    };
  }, []);

  return (
    <div
      className={`${classes.searchbar_wrapper} ${disabled ? ' disabled' : ''}`}
      onClick={() => inputRef?.current?.focus()}
    >
      <input className={`${classes.input_search} ${className}`} {...props} ref={inputRef} />
      <div className={classes.searchbar_tip}>ctrl + /</div>
    </div>
  );
};

export default SearchBar;
