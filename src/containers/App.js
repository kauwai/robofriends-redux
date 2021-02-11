import React, { useEffect } from 'react';
import CardList from '../components/Cards/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchChange: (value) => dispatch(setSearchField(value)),
    handleRequestRobots: () => dispatch(requestRobots()),
  };
};

const App = ({
  searchField,
  handleSearchChange,
  robots,
  handleRequestRobots,
  isPending,
}) => {
  useEffect(() => {
    handleRequestRobots();
  }, []);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return isPending ? (
    <h1 className="tc f1">Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Robofriends</h1>
      <SearchBox onSearchChange={handleSearchChange} />
      <Scroll>
        <CardList robotsToDisplay={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
