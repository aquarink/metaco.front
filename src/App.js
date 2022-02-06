import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// PAGES
import Header from './pages/Header'

import Leaderboard from './pages/Leaderboard'
import List from './pages/List'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Teams from './pages/Teams'
import Members from './pages/Members'
import Players from './pages/Players'

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
          <Route path="/teams" exact element={<Teams />} />
          <Route path="/team-member" exact element={<Members />} />
          <Route path="/players" exact element={<Players />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;