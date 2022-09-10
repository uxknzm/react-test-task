import React from 'react';
import './App.css';
import AppRouter from './component/AppRouter/AppRouter';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
