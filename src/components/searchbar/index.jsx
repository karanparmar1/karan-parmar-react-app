import React, { useEffect, useRef } from 'react';
import classes from './searchbar.module.css';

const SearchBar = ({ className, ...props }) => {
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
    <div className={classes.searchbar_wrapper}>
      <input className={`${classes.input_search} ${className}`} {...props} ref={inputRef} />
      <div className="searchbar_tip">ctrl + /</div>
    </div>
  );
};

export default SearchBar;
