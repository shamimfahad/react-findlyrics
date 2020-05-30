import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Lyrics = (props) => {
  // console.log(props.match.params);
  const { artist, title } = props.match.params;

  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    const apiUrl = 'https://api.lyrics.ovh';

    const getLyrics = async () => {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/${apiUrl}/v1/${artist}/${title}`
        )
        .then((res) => {
          const data = res.data.lyrics;
          setLyrics(data);
        })
        .catch((error) => console.log(error));
    };

    getLyrics();
  });

  return (
    <div>
      <div className="text-center">
        <div className="border-bottom border-primary">
          <div className="display-4 mt-2">{title}</div>
          <p style={{ fontSize: '2rem' }}>{artist}</p>
        </div>
        <div className="mt-4">
          {lyrics.split('\n').map(function (item) {
            return (
              <>
                {item}
                <br />
              </>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Lyrics;
