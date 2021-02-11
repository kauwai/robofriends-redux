import React from 'react';

export default function SearchBox({ onSearchChange }) {
  const handleSearch = ({ target }) => {
    const { value } = target;
    onSearchChange(value);
  };

  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search robots..."
        onChange={handleSearch}
      />
    </div>
  );
}
