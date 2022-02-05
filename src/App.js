import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// PAGES
import Header from './pages/Header'

import Leaderboard from './pages/Leaderboard'
import List from './pages/List'
import Add from './pages/Add'
import Edit from './pages/Edit'

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Routes>
          <Route path="/" exact element={<Leaderboard />} />
          <Route path="/list" exact element={<List />} />
          <Route path="/add" exact element={<Add />} />
          <Route path="/edit" exact element={<Edit />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;