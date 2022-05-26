import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Router>
     <Sidebar />
     <Header/>
     <Dashboard />
    </Router>
    </>
  );
}

export default App;
