import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Imessage from "./Imessage";
import Login from "./Login";
import { selectUser, logout, login } from "./features/userSlice";
import {auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
          if (authUser) {
              // user is logged in
              dispatch(login({
                  uid: authUser.id,
                  photo: authUser.photoURL,
                  email: authUser.email,
                  displayName: authUser.displayName
              }))
          } else {
              // user is logged out
              dispatch(logout())
          }
      })
  }, [])

  return (
    <div className="app">
      {user ? <Imessage /> : <Login />}
    </div>
  );
}

export default App;
