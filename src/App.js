import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Noteful/header';
import Sidebar from './Noteful/sidebar';
import MainSection from './Noteful/mainSection';

function App() {
  return (
    <div className="App">
      <Route
        path="/"
        render={
          <>
            <Header />
            <Sidebar />
            <MainSection />
          </>
        }
      />
    </div>
  );
}

export default App;
