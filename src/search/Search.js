import React from 'react';

const Search = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <div className="card card-body mb-4 p-4">
        <h3 className="display-5 text-center">
          <span style={{ color: '#07A8A6' }}>
            <i className="fas fa-music"></i>
          </span>{' '}
          Search For A Song
        </h3>
        <p className="lead text-center">Get lyrics for any song</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Song title..."
              name="searchTerm"
              onChange={handleChange}
            />
          </div>
          <button
            className="btn btn-lg btn-block mb-5"
            style={{ background: '#1F70D0', color: '#fff' }}
            type="submit"
          >
            Get Track Lyrics
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
