import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Home, SignIn, SignUp } from './pages';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/signin" element={<SignIn/>} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
