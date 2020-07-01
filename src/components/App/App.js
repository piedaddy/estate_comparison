import React from 'react';
import EstateList from '../EstateList/EstateList';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="app__title">
        <h1>Estate Comparison</h1>
        </div>
      <EstateList />
    </div>
  );
}

export default App;
