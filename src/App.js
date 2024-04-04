import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import NomalPage from './NomalPage';
import ReactQueryPage from './ReactQueryPagae';

function App() {
  return (
    <div className="App">
      <nav style={{backgroundColor:"beige", padding:"20px"}}>
        <Link to="/" style={{marginRight:"10px"}}>일반페이지</Link>
        <Link to="/Nomal" style={{marginRight:"10px"}}>일반api호출</Link>
        <Link to="/ReactQuery">리액트쿼리</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Nomal" element={<NomalPage />} />
        <Route path="/ReactQuery" element={<ReactQueryPage />} />
      </Routes>
    </div>
  );
}

export default App;
