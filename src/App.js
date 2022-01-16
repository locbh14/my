import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import User from './components/User';
import Post from './components/Post';


const App = () => {
  /*<Home/>*/
  return (
    <Router>
      <Routes>

        <Route element={<User />} path="/user"></Route>
        <Route element={<Post />} path="/post"></Route>

      </Routes>
      
    </Router>
    
  );
}

export default App;

