import React from 'react';

import Track from '../components/track/track.component';

const Tracks = ({ tracks, searchTerm }) => {
  console.log(tracks);
  return (
    <>
      <h2 className="text-center mb-4 text-capitalize">{searchTerm}</h2>
      <div className="row">
        {tracks.map((item) => (
          <Track key={item.id} track={item} />
        ))}
      </div>
    </>
  );
};

export default Tracks;
