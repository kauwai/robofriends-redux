import React from 'react';
import Card from './Card';

export default function CardList({ robotsToDisplay }) {
  return (
    <div className="center w-80 mv3">
      {robotsToDisplay.map(({ id, username, name, email }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            username={username}
            email={email}
          />
        );
      })}
    </div>
  );
}
