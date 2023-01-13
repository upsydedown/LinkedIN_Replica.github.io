import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />


      {/* App body */}
      <div className="app_mainbody">
        <Sidebar/>
        <Feed/>
      {/* widgets */}
      </div>
    </div>
  );
}

export default App;
