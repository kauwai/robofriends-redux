import React from 'react';

export default function SearchBox({ onRobotSearch }) {
  const handleSearch = ({ target }) => {
    const { value } = target;
    onRobotSearch(value);
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
