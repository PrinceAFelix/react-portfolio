import './App.css';
import React, { lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import ContinuefyProject from './pages/ContinuefyProject'

const PageNotFound = lazy(() => import("./pages/PageNotFound"))

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/continuefy" element={<ContinuefyProject />} />
          <Route path="*" element={PageNotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App