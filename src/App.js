import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Login from "./Login.js";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser)
  return (
    <div className="App">
      
      {!user ? (
      <Login />,
      <Header/>) : (
        <div className="head">
          <Header />
        <div className="app_mainbody">
          <Sidebar />
          <Feed />
          {/* widgets */}
        </div>
        </div>
      )}
    </div>
  );
}

export default App;
