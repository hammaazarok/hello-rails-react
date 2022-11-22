import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Hello there</h1>
      <Link to="/greeting">Welcome</Link>
      <Routes>
        <Route path="/greeting" element={<h1>hello route</h1>} />
      </Routes>
    </div>
  );
};
export default App;