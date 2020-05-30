import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({ track }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist.name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play" /> Track
            </strong>
            : {track.title}
            <br />
            <strong>
              <i className="fas fa-compact-disc" /> Album
            </strong>
            : {track.album.title}
          </p>
          <Link
            to={`lyrics/track/${track.artist.name}/${track.title}`}
            className="btn btn-dark btn-block"
            style={{ background: '#207298' }}
          >
            <i className="fas fa-chevron-right" /> View Lyrics
          </Link>
        </div>
      </div>
    </div>

    // <div className="col-md-6">
    //   <div>
    //     <h5>{track.title}</h5>
    //   </div>
    //   <div>
    //     <span>
    //       <i className="fas fa-play" /> Artist:{' '}
    //     </span>
    //     {track.artist.name}
    //   </div>
    //   <div>
    //     <span>
    //       <i className="fas fa-compact-disc" /> Album:{' '}
    //     </span>
    //     {track.album.title}
    //   </div>
    //   <Link
    //     to={`lyrics/track/${track.artist.name}/${track.title}`}
    //     className="btn btn-light btn-block"
    //   >
    //     <i className="fas fa-chevron-right" /> View Lyrics
    //   </Link>
    // </div>
  );
};

export default Track;
