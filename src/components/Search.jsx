import React from 'react';

const Search = ({ handleSearch }) => {
  const onChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="mb3">
      <input
        type="text"
        placeholder="Search by tag (e.g., 'travel' or 'electronics')"
        onChange={onChange}
        className="pa2 input-reset ba b--black-20 w-100"
      />
    </div>
  );
};

export default Search;
