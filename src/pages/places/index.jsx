// Import modules
import React, { useEffect, useState } from 'react';

// Import components
import SearchBar from '../../components/searchbar';
import Table from '../../components/Table';

// Import Services
import { GetPlacesByCity } from '../../utils/api';

// Import Misc
import classes from './places.module.css';

const Places = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (!search) {
      setMessage('Start searching');
    }
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      if (!loading) {
        setLoading(true);
        GetPlacesByCity(search)
          .then((res) => res.json())
          .then((data) => {
            const { Places } = data;
            if (Places?.length === 0) {
              setMessage('No result founds');
            } else {
              setMessage(false);
            }
            setData(Places);
          })
          .catch((e) => {
            console.error('Error=>', e);
            setMessage('Something went wrong !');
          })
          .finally(() => setLoading(false));
      }
    }
  };

  return (
    <div className={classes.places_wrapper}>
      <SearchBar placeholder="Search Places..." value={search} onChange={handleSearch} onKeyPress={handleEnter} />

      {loading ? (
        <div className="spinner-wrapper">
          <div className="spinner" />
        </div>
      ) : (
        <Table columns={['#', 'Place Name', 'Country']} data={data} message={message} />
      )}
    </div>
  );
};

export default Places;
