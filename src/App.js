import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { All } from './pages/All';
import { FullStackDevelopment} from './pages/FullStackDevelopment';
import { DataScience} from './pages/DataScience';
import { CyberSecurity} from './pages/CyberSecurity';
import { Career } from './pages/Career';
import React, { Component }  from 'react';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullstack-development" element={<FullStackDevelopment />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
