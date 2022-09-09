import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-grid-dot"
  })
  return (
    <div className="App">
      <div className="box1">1</div>
      <div className="box2">2</div>
      <div className="box3">3</div>
      <div className="box4">4</div>
      <div className="box5">5</div>
      <div className="box1">1</div>
      <div className="box2">2</div>
      <div className="box3">3</div>
      <div className="box4">4</div>
      <div className="box5">5</div>
      <div className="box1">1</div>
      <div className="box2">2</div>
      <div className="box3">3</div>
      <div className="box4">4</div>
      <div className="box5">5</div>
    </div>
  );
}

export default App;
