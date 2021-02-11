import React, { useEffect, useState } from 'react';
import CardList from '../components/Cards/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

export default function App() {
  const [robotSearch, setRobotSearch] = useState('');
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const fetchRobots = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const robotsFetched = await response.json();
      setRobots(robotsFetched);
    };
    fetchRobots();
  }, []);

  const handleRobotSearch = (robot) => {
    setRobotSearch(robot);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(robotSearch.toLowerCase())
  );

  return !robots.length ? (
    <h1 className="tc f1">Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Robofriends</h1>
      <SearchBox onRobotSearch={handleRobotSearch} />
      <Scroll>
        <CardList robotsToDisplay={filteredRobots} />
      </Scroll>
    </div>
  );
}
