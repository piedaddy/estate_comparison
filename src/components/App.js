import React from 'react';
import './App.scss';
import SearchResults from './SearchResults/SearchResults';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <div className="app__title">
        <h1>Estate Comparison</h1>
        </div>
      <Header />
      <SearchResults />
    </div>
  );
}

export default App;
