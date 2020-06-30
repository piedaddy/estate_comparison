import React from 'react';
import './App.scss';
import SearchResults from './SearchResults/SearchResults';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <div className="app app__title">Estate Comparison</div>
      <Header />
      <SearchResults />
    </div>
  );
}

export default App;
