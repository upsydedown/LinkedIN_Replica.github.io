import { useEffect } from 'react';
import './App.css';
import { auth } from "./firebase"
import Header from './Header.js';
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Login from "./Login.js";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        }))
      }
      else {
        //user is logged out
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="App">

      {!user ? (
        <Login />) : (
        <div className="head">
          <Header />
          <div className="app_mainbody">
            <Sidebar />
            <Feed />
            <Widgets/>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
