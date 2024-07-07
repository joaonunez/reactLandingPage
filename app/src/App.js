import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/main.css'
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
