import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { fetchSongs } from '../../api/Api';

import Search from '../search/Search';
import Tracks from '../tracks/Tracks';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [songList, setSongList] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchTerm);
    e.target.reset();
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      const apiUrl = 'https://api.lyrics.ovh';

      const fetchSongs = async (searchTerm) => {
        axios
          .get(
            `https://cors-anywhere.herokuapp.com/${apiUrl}/suggest/${searchTerm}`
          )
          .then((res) => {
            const data = res.data.data;
            setSongList(data);
          })
          .catch((error) => console.log(error));
      };

      fetchSongs(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div>
      <Search handleSubmit={handleSubmit} handleChange={handleChange} />
      {songList ? (
        <Tracks tracks={songList} searchTerm={searchTerm} />
      ) : (
        <div className="text-center">
          <h5 className="lead">You haven't searched anything</h5>
        </div>
      )}
    </div>
  );
};

export default Index;
