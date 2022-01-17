import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import User from './components/User';
import Login from './components/Login';


const App = () => {
  /*<Home/>*/
  return (
    <Router>
      <Routes>

        <Route element={<User />} path="/admin/user"></Route>
        <Route element={<Login />} path="/admin/login"></Route>

      </Routes>
      
    </Router>
    
  );
}

export default App;

